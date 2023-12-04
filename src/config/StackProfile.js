import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClinicaDetalles from "../modules/detalles/screen/clinicaDetalles";
import ClinicasPublicas from "../modules/clinicas/clinicas";
import SelectHorario from "../modules/detalles/screen/selectHorario";
import UserProfile from "../modules/user/user";
import EditProfile from "../modules/user/editPorfile";
import Recetas from "../modules/user/recetas";
import HistorialMedico from "../modules/user/historialMedico";
import CitasRealizadas from "../modules/user/citasRealizadas";
import CitasPendientes from "../modules/user/citasPendientes";

const Stack = createNativeStackNavigator();

export default StackProfile = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="perfil" component={UserProfile} options={{
                title: 'Perfil', headerStyle: {
                    backgroundColor: '#149ACC',

                },
                contentStyle: {
                    backgroundColor: '#fff',

                },
                headerTintColor: '#fff',
            }} />
            <Stack.Screen name="edit-profile" component={EditProfile} options={{
                title: 'Editar Perfil',
                headerStyle: {
                    backgroundColor: '#149ACC',

                },
                headerTintColor: '#fff',

            }} />
            <Stack.Screen
                name="recetas"
                component={Recetas}
                options={{
                    title: 'Recetas',
                    headerStyle: {
                        backgroundColor: '#149ACC',

                    },
                    headerTintColor: '#fff',

                }}
            />
            <Stack.Screen
                name="historial-medico"
                component={HistorialMedico}
                options={{
                    title: 'Historial Médico',
                    headerStyle: {
                        backgroundColor: '#149ACC',

                    },
                    headerTintColor: '#fff',

                }}
            />
            <Stack.Screen
                name="citas-realizadas"
                component={CitasRealizadas}
                options={{
                    title: 'Citas Realizadas',
                    headerStyle: {
                        backgroundColor: '#149ACC',

                    },
                    headerTintColor: '#fff',

                
                }}
            />
            <Stack.Screen
                name="citas-pendientes"
                component={CitasPendientes}
                options={{
                    title: 'Citas Pendientes',
                    headerStyle: {
                        backgroundColor: '#149ACC',

                    },
                    headerTintColor: '#fff',

                }}
            />
        </Stack.Navigator>
    );
}