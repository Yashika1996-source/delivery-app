import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import DeliveryScreen from "./rideDetails";
import UserProfileScreen from "./profile";
import BloodDonationApp from "./notification";
import HomeScreen from "./home";
import QRCodeScanner from "./qr";
import InProgressJobs from "./currentJobs";

export default function Home() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
      }}
      initialRouteName="home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="In Progress" component={InProgressJobs} />
      <Drawer.Screen name="Profile" component={UserProfileScreen} />
      <Drawer.Screen name="Notifications" component={BloodDonationApp} />
    </Drawer.Navigator>
  );
}
