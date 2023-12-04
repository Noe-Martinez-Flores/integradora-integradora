import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ClinicasPublicas from '../modules/clinicas/clinicas';
import ClinicasPrivadas from '../modules/clinicas/clinicasPrivadas';
import UserProfile from '../modules/user/user';
import SlackClinicasNavigation from './SlackClinicasNavigation';
import SlackClinicasPrivadasNavigation from './StackClinicasGubPubNavigation';
import StackProfile from './StackProfile';
import LlamarEmergenciasView from '../modules/panic/LlamarEmergenciasView';

const Tab = createBottomTabNavigator();

export default TabContainer = () => {
    return(
        <Tab.Navigator initialRouteName='slack-clinicas-publicas' screenOptions={{ headerShown : true}}>
            <Tab.Screen name="slack-clinicas-publicas" component={SlackClinicasNavigation} options={{
                headerShown : false,
                tabBarIcon : ({ color, size }) => (
                    <FontAwesome5 name="clinic-medical" size={size}  color={color} />
                ),
                tabBarLabel : 'Clinicas Publicas',
                tabBarActiveTintColor : '#0E8034',
                tabBarInactiveTintColor: 'grey',
                
            }}/>
            <Tab.Screen name="clinicas-privadas" component={SlackClinicasPrivadasNavigation} options={{
                headerShown : false,
                tabBarIcon : ({ color, size }) => (
                    <FontAwesome5 name="hospital-alt" size={size} color={color} />
                ),
                tabBarLabel : 'Clinicas Privadas',
                tabBarActiveTintColor : '#C31B1B',
                tabBarInactiveTintColor: 'grey',
            }} />
            <Tab.Screen name="usuario" component={StackProfile} options={{
               headerShown : false,
                tabBarIcon : ({ color, size }) => (
                    <FontAwesome name="user" size={size} color={color} />
                ),
                tabBarLabel : 'Perfil',
                tabBarActiveTintColor : '#149ACC',
                tabBarInactiveTintColor: 'grey',
            }} />
            <Tab.Screen
                name='llamar-emergencias'
                component={LlamarEmergenciasView}
                options={{
                    headerShown : false,
                    tabBarIcon : ({ color, size }) => (
                        <FontAwesome name="phone" size={size} color={color} />
                    ),
                    tabBarLabel : 'Emergencias',
                    tabBarActiveTintColor : '#149ACC',
                    tabBarInactiveTintColor: 'grey',
                }}
            />
        </Tab.Navigator>
    );
};