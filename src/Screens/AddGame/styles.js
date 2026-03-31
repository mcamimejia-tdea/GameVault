import { StyleSheet } from "react-native"

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f2",
	},
	flex: {
		flex: 1,
	},
	headerBar: {
		paddingHorizontal: 20,
		backgroundColor: "#f2f2f2",
	},
	screenTitle: {
		fontSize: 26,
		fontWeight: "400",
		color: "#1e1e2e",
		paddingTop: 20,
		paddingBottom: 30,
	},
	scrollContent: {
		padding: 20,
		paddingBottom: 20,
	},
	fieldGroup: {
		marginBottom: 20,
	},
	label: {
		fontSize: 12,
		color: "#888",
		fontWeight: "600",
		textTransform: "uppercase",
		letterSpacing: 0.8,
		marginBottom: 8,
	},
	input: {
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingHorizontal: 14,
		paddingVertical: 12,
		fontSize: 15,
		color: "#1e1e2e",
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	chipsRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
	},
	chip: {
		backgroundColor: "#fff",
		borderRadius: 8,
		paddingHorizontal: 14,
		paddingVertical: 8,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	chipSelected: {
		backgroundColor: "#558a98",
	},
	chipText: {
		fontSize: 13,
		fontWeight: "600",
		color: "#1e1e2e",
	},
	chipTextSelected: {
		color: "#fff",
	},
	actionsRow: {
		flexDirection: "row",
		gap: 12,
		marginTop: 8,
	},
	clearButton: {
		flex: 1,
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingVertical: 14,
		alignItems: "center",
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	clearButtonText: {
		fontSize: 15,
		fontWeight: "600",
		color: "#1e1e2e",
	},
	addButton: {
		flex: 2,
		backgroundColor: "#1e1e2e",
		borderRadius: 10,
		paddingVertical: 14,
		alignItems: "center",
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	addButtonDisabled: {
		backgroundColor: "#aaa",
	},
	addButtonText: {
		fontSize: 15,
		fontWeight: "700",
		color: "#fff",
	},
})

