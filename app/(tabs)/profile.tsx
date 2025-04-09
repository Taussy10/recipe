import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView
      // This is design requriemetns
      className="flex-1 px-4">
      {/* style={{ fontFamily: 'Poppins_700Bold' }}  */}
      <Text className="font-poppinsBold">Profile</Text>
      <Text className="">Hello</Text>
    </SafeAreaView>
  );
};

export default Profile;
