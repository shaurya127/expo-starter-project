import { useState } from 'react';
import { Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleWelcome = async () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Welcome!',
        `Hello ${name}! Welcome to your Expo starter app.`
      );
    }, 1000);
  };

  if (loading) {
    return <LoadingSpinner text="Processing..." />;
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
            resizeMode="contain"
          />
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome to Expo Starter!</ThemedText>
            <HelloWave />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.formContainer}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Get Started
          </ThemedText>
          <ThemedText style={styles.description}>
            This is your comprehensive Expo starter template with best
            practices, essential utilities, and modern React Native patterns.
          </ThemedText>

          <Input
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <Button
            title="Say Hello"
            onPress={handleWelcome}
            variant="primary"
            size="large"
          />
        </ThemedView>

        <ThemedView style={styles.featuresContainer}>
          <ThemedText type="subtitle" style={styles.featuresTitle}>
            What's Included
          </ThemedText>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">🎨 Theming System</ThemedText>
            <ThemedText>Light/dark theme support with custom colors</ThemedText>
          </ThemedView>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">🗃️ State Management</ThemedText>
            <ThemedText>Zustand for global state with persistence</ThemedText>
          </ThemedView>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">🌐 API Integration</ThemedText>
            <ThemedText>HTTP client with error handling</ThemedText>
          </ThemedView>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">📱 Navigation</ThemedText>
            <ThemedText>File-based routing with Expo Router</ThemedText>
          </ThemedView>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">🔒 Secure Storage</ThemedText>
            <ThemedText>Encrypted storage for sensitive data</ThemedText>
          </ThemedView>

          <ThemedView style={styles.featureItem}>
            <ThemedText type="defaultSemiBold">🧪 Testing Ready</ThemedText>
            <ThemedText>Jest setup with testing utilities</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  reactLogo: {
    height: 120,
    width: 180,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  formContainer: {
    marginVertical: 24,
  },
  subtitle: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 24,
    lineHeight: 20,
    opacity: 0.8,
  },
  featuresContainer: {
    marginTop: 32,
  },
  featuresTitle: {
    marginBottom: 16,
  },
  featureItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
  },
});
