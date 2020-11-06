import React, { useEffect } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Button, Input, Text, NavBar } from "galio-framework";
import theme from "../../assets/theme";
import { useForm } from "react-hook-form";

const { height, width } = Dimensions.get("window");

const FormMovie = (porps) => {
  const { onSubmit } = porps;
  const { register, handleSubmit, setValue, errors } = useForm();

  console.log("errors ===> ", errors);
  useEffect(() => {
    register({ name: "title" }, { required: true });
  }, [register]);

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex={2} center space="between">
          <Block flex={2}>
            <Input
              rounded
              placeholder="Title"
              autoCapitalize="none"
              style={{ width: width * 0.9 }}
              onChangeText={(text) => setValue("title", text)}
            />
          </Block>
          <Block>{errors.title && <Text>This field is required</Text>}</Block>
          <Block flex middle>
            <Button round color="error" onPress={handleSubmit(onSubmit)}>
              Add
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default FormMovie;
