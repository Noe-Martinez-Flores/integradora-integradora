import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClinicaDetalles from "../modules/detalles/screen/clinicaDetalles";
import SelectHorario from "../modules/detalles/screen/selectHorario";
import ClinicasPrivadas from "../modules/clinicas/clinicasPrivadas";

const Stack = createNativeStackNavigator();

export default SlackClinicasPrivadasNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="clinicas-publicas" component={ClinicasPrivadas} options={{ title : 'Clinicas Publicas/Gubernamentales', headerStyle : {
                backgroundColor : '#C31B1B',
                
            },
            contentStyle : {
                backgroundColor : '#fff',
                
            },
            headerTintColor : '#fff',
            }} />
            <Stack.Screen name="detalle-clinica" component={ClinicaDetalles}  options={{ title : 'Detalles de la clinica', headerStyle : {
                backgroundColor : '#C31B1B',
                
            },
            headerTintColor : '#fff',
            }} />
            <Stack.Screen name="horarios-clinicas" component={SelectHorario} options={{ title : 'Selección de horarios', headerStyle : {
                backgroundColor : '#C31B1B',
                
            },
            headerTintColor : '#fff',
            }}  />
        </Stack.Navigator>
    );
}