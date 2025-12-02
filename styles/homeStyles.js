
import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: {
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
  profilePicPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  username: { fontSize: 20, fontWeight: "bold", marginVertical: 5 },
  headerButtons: { flexDirection: "row", gap: 10, marginBottom: 10 },
  button: { marginHorizontal: 5 },
  logout: { marginTop: 5, alignSelf: "center" },
  grid: { justifyContent: "center" },
  imageContainer: { alignItems: "center", margin: 5 },
  fakeImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  imageLabel: { fontSize: 12, color: "#333", marginTop: 4 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
  },
});
