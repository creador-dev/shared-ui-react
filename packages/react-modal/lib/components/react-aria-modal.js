// https://github.com/davidtheclark/react-aria-modal/blob/master/src/react-aria-modal.js

import React from "react";
import * as noScroll from "./no-scroll";
import { ReactFocusTrap } from "./focus-trap-react";
import { displace } from "./react-displace";

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.getApplicationNode = () => {
			if (this.props.getApplicationNode) return this.props.getApplicationNode();
			return this.props.applicationNode;
		};

		this.checkUnderlayClick = event => {
			if (
				(this.dialogNode &&
					event.target instanceof Node &&
					this.dialogNode.contains(event.target)) ||
				// If the click is on the scrollbar we don't want to close the modal.
				(event.target instanceof Element &&
					event.target.ownerDocument &&
					(event.pageX >
						event.target.ownerDocument.documentElement.offsetWidth ||
						event.pageY >
							event.target.ownerDocument.documentElement.offsetHeight))
			)
				return;
			this.exit(event);
		};

		this.checkDocumentKeyDown = event => {
			if (
				this.props.escapeExits &&
				(event.key === "Escape" || event.key === "Esc" || event.keyCode === 27)
			) {
				this.exit(event);
			}
		};

		this.exit = event => {
			if (this.props.onExit) {
				this.props.onExit(event);
			}
		};

		if (!this.props.titleText && !this.props.titleId) {
			throw new Error(
				"react-aria-modal instances should have a `titleText` or `titleId`"
			);
		}
	}

	componentDidMount() {
		if (this.props.onEnter) {
			this.props.onEnter();
		}

		// Timeout to ensure this happens *after* focus has moved
		const applicationNode = this.getApplicationNode();

		setTimeout(() => {
			if (applicationNode && applicationNode instanceof Element) {
				applicationNode.setAttribute("aria-hidden", "true");
			}
		}, 0);

		if (this.props.escapeExits) {
			this.addKeyDownListener();
		}

		if (this.props.scrollDisabled) {
			noScroll.on();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.scrollDisabled && !this.props.scrollDisabled) {
			noScroll.off();
		} else if (!prevProps.scrollDisabled && this.props.scrollDisabled) {
			noScroll.on();
		}

		if (this.props.escapeExits && !prevProps.escapeExits) {
			this.addKeyDownListener();
		} else if (!this.props.escapeExits && prevProps.escapeExits) {
			this.removeKeyDownListener();
		}
	}

	componentWillUnmount() {
		if (this.props.scrollDisabled) {
			noScroll.off();
		}

		const applicationNode = this.getApplicationNode();

		if (applicationNode && applicationNode instanceof Element) {
			applicationNode.setAttribute("aria-hidden", "false");
		}

		this.removeKeyDownListener();
	}

	addKeyDownListener() {
		setTimeout(() => {
			document.addEventListener("keydown", this.checkDocumentKeyDown);
		});
	}

	removeKeyDownListener() {
		setTimeout(() => {
			document.removeEventListener("keydown", this.checkDocumentKeyDown);
		});
	}

	render() {
		const props = this.props;
		let style = {};

		// @edited
		// if (props.includeDefaultStyles) {
		// 	style = {
		// 		position: "fixed",
		// 		top: 0,
		// 		left: 0,
		// 		width: "100%",
		// 		height: "100%",
		// 		zIndex: 1050,
		// 		overflowX: "hidden",
		// 		overflowY: "auto",
		// 		WebkitOverflowScrolling: "touch",
		// 		textAlign: "center"
		// 	};
		// 	if (props.underlayColor) {
		// 		style.background = props.underlayColor;
		// 	}
		// 	if (props.underlayClickExits) {
		// 		style.cursor = "pointer";
		// 	}
		// }

		if (props.underlayStyle) {
			for (const key in props.underlayStyle) {
				if (!Object.prototype.hasOwnProperty.call(props.underlayStyle, key))
					continue;
				style[key] = props.underlayStyle[key];
			}
		}

		const underlayProps = {
			className: props.underlayClass,
			style: style
		};

		if (props.underlayClickExits) {
			underlayProps.onMouseDown = this.checkUnderlayClick;
		}

		for (const prop in this.props.underlayProps) {
			underlayProps[prop] = this.props.underlayProps[prop];
		}

		let verticalCenterStyle = {};

		// @edited
		// if (props.includeDefaultStyles) {
		// 	verticalCenterStyle = {
		// 		display: "inline-block",
		// 		height: "100%",
		// 		verticalAlign: "middle"
		// 	};
		// }

		let dialogStyle = {};

		// @edited
		// if (props.includeDefaultStyles) {
		// 	dialogStyle = {
		// 		display: "inline-block",
		// 		textAlign: "left",
		// 		top: 0,
		// 		maxWidth: "100%",
		// 		cursor: "default",
		// 		outline: props.focusDialog ? 0 : undefined
		// 	};

		// 	if (props.verticallyCenter) {
		// 		dialogStyle.verticalAlign = "middle";
		// 		dialogStyle.top = 0;
		// 	}
		// }

		if (props.dialogStyle) {
			for (const key in props.dialogStyle) {
				if (!Object.prototype.hasOwnProperty.call(props.dialogStyle, key))
					continue;
				dialogStyle[key] = props.dialogStyle[key];
			}
		}

		const dialogProps = {
			key: "b",
			ref: el => {
				this.dialogNode = el;
			},
			role: props.alert ? "alertdialog" : "dialog",
			id: props.dialogId,
			className: props.dialogClass,
			style: dialogStyle
		};

		if (props.titleId) {
			dialogProps["aria-labelledby"] = props.titleId;
		} else if (props.titleText) {
			dialogProps["aria-label"] = props.titleText;
		}

		if (props.focusDialog) {
			dialogProps.tabIndex = -1;
		}

		// Apply data- and aria- attributes passed as props
		for (let key in props) {
			if (/^(data-|aria-)/.test(key)) {
				dialogProps[key] = props[key];
			}
		}

		const childrenArray = [
			React.createElement("div", { ...dialogProps }, props.children)
		];

		if (props.verticallyCenter) {
			childrenArray.unshift(
				React.createElement("div", { key: "a", style: verticalCenterStyle })
			);
		}

		const focusTrapOptions = props.focusTrapOptions || {};

		if (props.focusDialog || props.initialFocus) {
			focusTrapOptions.initialFocus = props.focusDialog
				? `#${this.props.dialogId}`
				: props.initialFocus;
		}

		focusTrapOptions.escapeDeactivates = props.escapeExits;

		return React.createElement(
			ReactFocusTrap,
			{ focusTrapOptions: focusTrapOptions, paused: props.focusTrapPaused },
			React.createElement("div", { ...underlayProps }, childrenArray)
		);
	}
}

Modal.defaultProps = {
	underlayProps: {},
	dialogId: "react-aria-modal-dialog",
	// @edited
	// underlayClickExits: true,
	escapeExits: true,
	// @edited
	// underlayColor: "rgba(0,0,0,0.5)",
	// includeDefaultStyles: true,
	focusTrapPaused: false,
	scrollDisabled: true
};

const AriaModal = displace(Modal);

AriaModal.renderTo = function (input) {
	return displace(Modal, { renderTo: input });
};

export default AriaModal;
