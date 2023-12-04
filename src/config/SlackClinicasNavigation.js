import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClinicaDetalles from "../modules/detalles/screen/clinicaDetalles";
import ClinicasPublicas from "../modules/clinicas/clinicas";
import SelectHorario from "../modules/detalles/screen/selectHorario";

const Stack = createNativeStackNavigator();

export default SlackClinicasNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="clinicas-publicas" component={ClinicasPublicas} options={{ title : 'Clinicas Publicas', headerStyle : {
                backgroundColor : '#0E8034',
                
            },
            contentStyle : {
                backgroundColor : '#fff',
                
            },
            headerTintColor : '#fff',
            }} />
            <Stack.Screen name="detalle-clinica" component={ClinicaDetalles}  options={{ title : 'Detalles de la clinica', headerStyle : {
                backgroundColor : '#0E8034',
                
            },
            headerTintColor : '#fff',
            }} />
            <Stack.Screen name="horarios-clinicas" component={SelectHorario} options={{ title : 'Selección de horarios', headerStyle : {
                backgroundColor : '#0E8034',
                
            },
            headerTintColor : '#fff',
            }}  />
        </Stack.Navigator>
    );
}