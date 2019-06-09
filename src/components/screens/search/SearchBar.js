import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const data_list = [
  {
    key: 1,
    title: "How to Talk To Your Children s Will Listen to you",
    category: "History",
    image:
      "https://static.tvmaze.com/uploads/images/original_untouched/111/277940.jpg"
  },
  {
    key: 2,
    title: "The 7 Habits of Highly Effective People",
    category: "Personal Growth",
    image:
      "https://static.tvmaze.com/uploads/images/original_untouched/64/162402.jpg"
  },
  {
    key: 3,
    title: "The Laws of Human Nature",
    category: "Science",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
  },
  {
    key: 4,
    title: "Say Good Night to Insomnia",
    category: "Health & Fitness",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
  },
  {
    key: 5,
    title: "Fail until you don't",
    category: "Science",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg"
  },
  {
    key: 6,
    title: "A guide to good life",
    category: "Psychology",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
  }
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      items: ""
    };
  }

  /**
   * Search data based on input of user from the search box
   * @param {string} input
   * @return {Filter items}
   */
  filter(input) {
    const data = data_list.filter(item => {
      const itemData = item.title.toUpperCase();
      const inputData = input.toUpperCase();
      return itemData.indexOf(inputData) > -1;
    });
    this.setState({
      textInput: input,
      items: data
    });
  }

  /**
   * Iterating objects from the items array
   * @param {string} item
   */
  _renderItem(item) {
    return (
      <View style={styles.searchList}>
        <View style={styles.searchImage}>
          <Image
            style={{ width: 120, height: 100 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.searchContent}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.description}>{item.title}</Text>
        </View>
      </View>
    );
  }

  /**
   * Clear the state of data when cross button has been activated
   * @param {string} item
   */
  deleteData() {
    this.setState({ textInput: "", items: "" });
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            size={18}
            name="search"
            color="grey"
            style={styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            placeholder="Search..."
            onChangeText={input => this.filter(input)}
            style={styles.input}
            autoFocus={true}
            placeholderTextColor="black"
          />
          {this.state.textInput ? (
            <TouchableWithoutFeedback onPress={() => this.deleteData()}>
              <Icon
                name="times-circle"
                color="grey"
                size={18}
                style={styles.iconInputClose}
              />
            </TouchableWithoutFeedback>
          ) : null}

          <TouchableWithoutFeedback
            style={styles.cancelBtn}
            onPress={() => goBack()}
          >
            <View style={styles.containerBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <FlatList
            style={{ marginRight: 5 }}
            data={this.state.items}
            renderItem={({ item }) => this._renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe6"
  },
  header: {
    backgroundColor: "#fffbe6",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    borderBottomWidth: 1,
    borderColor: "#37966F",
    paddingBottom: 20,
    position: "relative"
  },
  cancelBtnText: {
    color: "black",
    fontSize: 18
  },
  input: {
    fontSize: 15,
    height: 40,
    width: width - width / 4,
    backgroundColor: "#DCDCDC",
    marginHorizontal: 12,
    paddingLeft: 30,
    borderRadius: 3
  },
  searchIcon: {
    position: "absolute",
    top: 1,
    left: 20,
    zIndex: 1,
    backgroundColor: "transparent"
  },
  iconInputClose: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 1,
    top: 1,
    right: 100
  },
  searchList: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15
  },
  searchImage: {
    flex: 1
  },
  searchContent: {
    flex: 2,
    fontSize: 30
  },
  category: {
    paddingBottom: 18,
    fontSize: 15,
    fontWeight: "700"
  },
  description: {
    fontSize: 16
  }
});
