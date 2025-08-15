import { StyleSheet, ScrollView, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { usePosts } from '@/hooks/useApi';
import { useToggle } from '@/hooks/useUtils';

export default function ExploreScreen() {
  const { data: posts, loading, error, refetch } = usePosts();
  const [showAll, toggleShowAll] = useToggle(false);

  const handleTestAPI = () => {
    Alert.alert(
      'API Test',
      'This demonstrates the API integration. Check the posts below!'
    );
  };

  const displayedPosts = showAll ? posts : posts?.slice(0, 3);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Explore Features
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          Discover what's built into this starter template
        </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            🌐 API Integration Demo
          </ThemedText>
          <ThemedText style={styles.description}>
            This section demonstrates the built-in API service fetching data
            from a public API.
          </ThemedText>

          <Button
            title="Test API Connection"
            onPress={handleTestAPI}
            variant="primary"
            size="medium"
          />

          {loading && <LoadingSpinner text="Loading posts..." />}

          {error && (
            <ThemedView style={styles.errorContainer}>
              <ThemedText style={styles.errorText}>Error: {error}</ThemedText>
              <Button
                title="Retry"
                onPress={refetch}
                variant="secondary"
                size="small"
              />
            </ThemedView>
          )}

          {displayedPosts && (
            <ThemedView style={styles.postsContainer}>
              <ThemedText type="defaultSemiBold" style={styles.postsTitle}>
                Sample Posts ({posts?.length} total)
              </ThemedText>

              {displayedPosts.map((post) => (
                <ThemedView key={post.id} style={styles.postCard}>
                  <ThemedText type="defaultSemiBold" style={styles.postTitle}>
                    {post.title}
                  </ThemedText>
                  <ThemedText style={styles.postBody} numberOfLines={2}>
                    {post.body}
                  </ThemedText>
                </ThemedView>
              ))}

              {posts && posts.length > 3 && (
                <Button
                  title={showAll ? 'Show Less' : `Show All (${posts.length})`}
                  onPress={toggleShowAll}
                  variant="secondary"
                  size="small"
                />
              )}
            </ThemedView>
          )}
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            🛠 Developer Tools
          </ThemedText>

          <ThemedView style={styles.toolCard}>
            <ThemedText type="defaultSemiBold">State Management</ThemedText>
            <ThemedText>
              Zustand with persistence for global state management
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.toolCard}>
            <ThemedText type="defaultSemiBold">Storage Services</ThemedText>
            <ThemedText>
              Secure storage for sensitive data and AsyncStorage for app data
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.toolCard}>
            <ThemedText type="defaultSemiBold">Custom Hooks</ThemedText>
            <ThemedText>
              Utility hooks for debouncing, API calls, and common patterns
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.toolCard}>
            <ThemedText type="defaultSemiBold">Error Handling</ThemedText>
            <ThemedText>
              Comprehensive error handling with user-friendly messages
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            📱 Ready for Production
          </ThemedText>
          <ThemedText style={styles.description}>
            This template includes everything you need to build and deploy a
            production-ready app:
          </ThemedText>

          <ThemedText style={styles.bulletPoint}>
            • TypeScript configuration
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>
            • ESLint and Prettier setup
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>
            • Testing framework (Jest)
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>
            • EAS Build configuration
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>
            • Environment management
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>
            • CI/CD ready scripts
          </ThemedText>
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
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 16,
    lineHeight: 20,
    opacity: 0.8,
  },
  errorContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    marginVertical: 8,
  },
  errorText: {
    color: '#FF3B30',
    marginBottom: 8,
  },
  postsContainer: {
    marginTop: 16,
  },
  postsTitle: {
    marginBottom: 12,
  },
  postCard: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
  },
  postTitle: {
    marginBottom: 4,
    fontSize: 14,
  },
  postBody: {
    fontSize: 12,
    opacity: 0.7,
  },
  toolCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
  },
  bulletPoint: {
    marginVertical: 2,
    paddingLeft: 8,
  },
});
