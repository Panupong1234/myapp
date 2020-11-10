import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Block, Button, Input, Text, NavBar } from "galio-framework";
import theme from "../../assets/theme";
import { useForm } from "react-hook-form";

const { height, width } = Dimensions.get("window");

const InputGHB = (props) => {
  return (
    <View style={styles.multipleInput}>
      <Text style={styles.label}>{props.label}</Text>
      <Input
        rounded
        placeholder={props.title}
        autoCapitalize="none"
        // style={{ width: width * 0.9 }}
        onChangeText={(text) => setValue(props.title, text)}
      />
      {props?.errors?.title && <Text>field is required</Text>}
    </View>
  );
};

const FormMovie = (porps) => {
  const { onSubmit } = porps;
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    register({ name: "title" }, { required: true });
    register({ name: "description" });
  }, [register]);

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex={2} center space="between">
          <View style={styles.multipleContainer}>
            <InputGHB title='Title' label={'Title'} />

            <View style={styles.multipleInput}>
              <Text style={styles.label}>Title</Text>
              <Input
                rounded
                placeholder="Description"
                autoCapitalize="none"
                onChangeText={(text) => setValue("description", text)}
              />
              {errors.description && <Text>description is required</Text>}
            </View>
          </View>

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
  multipleContainer: {
    display: "flex",
    flexDirection: "row",
    width,
  },
  multipleInput: {
    display: "flex",
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "900",
  },
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
