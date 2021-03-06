import React from "react";
import { PropTypes } from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default (ErrorMessage = props => {
  const { displayMessage, type, message } = props;
  return displayMessage ? (
    <View style={styles.errorMessageContainer}>
      <View style={styles.errorMessage}>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
    </View>
  ) : (
    <Text />
  );
});

const styles = StyleSheet.create({
  errorMessageContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 2,
    paddingTop: 50
  },
  errorMessage: {
    flexDirection: "row",
    fontSize: 18,
    flex: 1,
    marginBottom: 2,
    color: "#FD5523"
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 999
  }
});
