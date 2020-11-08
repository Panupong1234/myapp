import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Block, Button } from "galio-framework";
import theme from "../../assets/theme";
import { useForm } from "react-hook-form";
import { InputGHB } from "../";

const { width, height } = Dimensions.get("window");

const Form = [
  {
    sub: [
      {
        name: "no",
        label: "บ้านเลขที่",
        rules: { required: true },
      },
      {
        name: "moo",
        label: "หมู่",
      },
    ],
  },
  {
    sub: [
      {
        keyboardType: "number-pad",
        name: "floor",
        label: "ชั้นที่",
      },
      {
        name: "room",
        label: "ห้อง",
      },
    ],
  },
  {
    name: "village",
    label: "หมู่บ้าน",
  },
];

const RegisterForm = (porps) => {
  const { onSubmit, onCancle } = porps;
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    Form.forEach((e) => {
      if (!e?.sub) {
        register({ name: e.name }, e.rules);
      } else {
        e.sub.forEach((ee) => {
          register({ name: ee.name }, ee.rules);
        });
      }
    });
  }, [register]);

  return (
    <Block safe flex>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <SafeAreaView style={styles.containerInput}>
          <ScrollView contentContainerStyle={styles.scrollInput}>
            <Block>
              {Form.map((e) =>
                e?.sub ? (
                  <View style={styles.multipleContainer}>
                    {e.sub.map((ee) => (
                      <InputGHB
                        {...ee}
                        onChangeText={(text) => setValue(ee.name, text)}
                      />
                    ))}
                  </View>
                ) : (
                  <InputGHB
                    {...e}
                    onChangeText={(text) => setValue(e.name, text)}
                  />
                )
              )}
            </Block>
          </ScrollView>
        </SafeAreaView>

        <Block flex space="around" row>
          <Button style={styles.buttonCancle} onPress={onCancle}>
            ยกเลิก
          </Button>
          <Button style={styles.buttonConfirm} onPress={handleSubmit(onSubmit)}>
            ตกลง
          </Button>
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
  containerInput: {
    width,
    height: height - 160,
  },
  scrollInput: {
    paddingBottom: 0,
    paddingVertical: 0,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  buttonCancle: {
    backgroundColor: theme.COLORS.GREY,
  },
  buttonConfirm: {
    backgroundColor: theme.COLORS.PRIMARY,
  },
});

export default RegisterForm;
