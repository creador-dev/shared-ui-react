import React from "react";

const ButtonIcon = ({ label, icon, iconSize, extraClasses, color, onClick, design = "solid", ...props }) => {
	const loader = (
		<span
			className="sui-icon-loader sui-loading"
			style={{ position: "relative" }}
			aria-hidden="true"
		/>
	);

	let content = (
		<React.Fragment>
			<span className={`sui-icon-${icon} ${iconSize ? "sui-" + iconSize : "" }`} aria-hidden="true" />
			<span className="sui-screen-reader-text">{label}</span>
		</React.Fragment>
	);

	let className = `sui-button-icon ${extraClasses || ""}`;

	// Set button color.
	switch (color) {
		case "blue":
		case "green":
		case "red":
		case "orange":
		case "purple":
		case "yellow":
		case "white":
			className += " sui-button-" + color;
			break;

		case "gray":
		default:
			className += "";
			break;
	}

	// Set button style.
	switch (design) {
		case "ghost":
		case "outlined":
			className += " sui-button-" + design;
			break;

		case "solid":
		default:
			className += "";
			break;
	}

	// Set loading class.
	if (props.loading) {
		className += " sui-button-onload";
	}

	if (props.href) {
		return (
			<a
				className={className}
				disabled={props.disabled || props.loading}
				{...props}>
				{props.loading ? loader : content}
			</a>
		);
	}

	return (
		<button
			className={className}
			disabled={props.disabled || props.loading}
			onClick={onClick}
			{...props}>
			{props.loading ? loader : content}
		</button>
	);
};

export { ButtonIcon };
