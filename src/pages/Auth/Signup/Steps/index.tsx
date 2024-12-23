import { useEffect } from "react";
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ISteps, useStepper } from "../../../../context/stepper";
import { Feather } from "@expo/vector-icons";
import Personal from "./Personal";
import Button from "../../../../components/Button";
import Login from "./Login";
import Address from "./Address";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function SingInStepper() {
	const { currentStepIndex, steps, isLoading, handleNextStep, handleChangeStep } = useStepper();

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 15,
				alignItems: "center",
				marginBottom: 20
			}}
		>
			<View style={styles.container}>
				{steps.map((step, index) => {
					const selectedStep = index === currentStepIndex;
					return (
						<View key={index} style={{
							flexDirection: "row",
							alignItems: "center"
						}}>
							{step.isCompleted &&
								<TouchableWithoutFeedback onPress={() => {
									handleChangeStep(index);
								}} style={[styles.stepCircle, styles.completedCircle]}>
									<Feather
										name="check"
										size={25}
										color="#FFFFFF"
									/>
								</TouchableWithoutFeedback>
							}
							{!step.isCompleted &&
								<View style={[styles.stepCircle, selectedStep && styles.selectedCircle]}>
									<Feather
										name={step.icon}
										size={25}
										color={selectedStep ? "#9B27FF" : "#5A5A5A"}
									/>
								</View>
							}
							{index < 2 && 
								<View 
									style={[
										{
											width: 50,
											height: 3,
											backgroundColor: "#EAEAEA",
											marginHorizontal: 10,
										},
										step.isCompleted && styles.completedCircle
									]}
								/>
							}
						</View>
					)
				})}
			</View>

			{currentStepIndex === 0 &&
				<Personal/>
			} 
			
			{currentStepIndex === 1 &&
				<Address/>
			}

			{currentStepIndex === 2 &&
				<Login/>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		marginTop: 30,
	},
	stepCircle: {
		width: 50,
		height: 50,

		borderRadius: 50,
		backgroundColor: "#FCFCFC",

		justifyContent: "center",
		alignItems: "center"
	},
	selectedCircle: {
		borderWidth: 2,
		borderColor: "#9B27FF",
	},
	selectedIcon: {
		color: "#9B27FF"
	},
	completedCircle: {
		backgroundColor: "#9B27FF"
	}
})

export default SingInStepper;