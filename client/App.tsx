import React, { useEffect } from 'react';
import { View, StyleSheet, BackHandler, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppProvider, useApp } from './src/context/AppContext';
import { TopHeader } from './src/components/TopHeader';
import { BottomNav } from './src/components/BottomNav';

// Screen Destinations
import { HomeScreen } from './src/screens/HomeScreen';
import { MaintenanceScreen } from './src/screens/MaintenanceScreen';
import { CommunityScreen } from './src/screens/CommunityScreen';
import { AccountScreen } from './src/screens/AccountScreen';
import { GateDutyScreen } from './src/screens/GateDutyScreen';
import { MeetingsScreen } from './src/screens/MeetingsScreen';
import { NoticesScreen } from './src/screens/NoticesScreen';
import { DocumentsScreen } from './src/screens/DocumentsScreen';
import { TerraceBookingScreen } from './src/screens/TerraceBookingScreen';
import { ComplaintsScreen } from './src/screens/ComplaintsScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import { PollsScreen } from './src/screens/PollsScreen';
import { AdminScreen } from './src/screens/AdminScreen';
import { PastMembersScreen } from './src/screens/PastMembersScreen';
import { ReceiptDetailScreen } from './src/screens/ReceiptDetailScreen';

const MainNavigator: React.FC = () => {
  const { currentScreen, colors, themeMode, goBack } = useApp();

  // Android Hardware Back Button Handling
  useEffect(() => {
    const onBackPress = () => {
      if (currentScreen !== 'home') {
        goBack();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, [currentScreen, goBack]);

  // Determine which screen component to render
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'maintenance':
        return <MaintenanceScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'account':
        return <AccountScreen />;
      case 'gate_duty':
        return <GateDutyScreen />;
      case 'meetings':
        return <MeetingsScreen />;
      case 'notices':
        return <NoticesScreen />;
      case 'documents':
        return <DocumentsScreen />;
      case 'terrace':
        return <TerraceBookingScreen />;
      case 'complaints':
        return <ComplaintsScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'polls':
        return <PollsScreen />;
      case 'admin_panel':
        return <AdminScreen />;
      case 'past_members':
        return <PastMembersScreen />;
      case 'receipt_detail':
        return <ReceiptDetailScreen />;
      default:
        return <HomeScreen />;
    }
  };

  // Top header is shown on main dashboard tabs
  const showTopHeader = ['home', 'community', 'account'].includes(currentScreen);

  // Bottom navigation bar is visible on primary tabs
  const showBottomNav = ['home', 'maintenance', 'community', 'account', 'admin_panel'].includes(currentScreen);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
      <StatusBar
        barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      {showTopHeader && <TopHeader />}

      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>

      {showBottomNav && <BottomNav />}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <MainNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  screenContainer: {
    flex: 1
  }
});
