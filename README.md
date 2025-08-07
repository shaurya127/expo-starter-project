# 🚀 Expo Starter App

A comprehensive, production-ready Expo/React Native starter template with modern best practices, essential utilities, and developer-friendly setup.

## ✨ Features

### Core Technologies
- **⚡ Expo SDK 52** - Latest Expo features and optimizations
- **📱 Expo Router** - File-based routing system
- **🔷 TypeScript** - Type-safe development
- **🎨 Theming System** - Light/dark mode support

### State Management & Data
- **🗃️ Zustand** - Lightweight state management with persistence
- **🔄 TanStack Query** - Server state management and caching
- **🔒 Secure Storage** - Encrypted storage for sensitive data
- **📦 AsyncStorage** - Persistent local storage

### UI & Components
- **🧱 Reusable Components** - Button, Input, Loading Spinner, etc.
- **🎯 Custom Hooks** - Theme, color scheme utilities
- **📐 Responsive Design** - Works on phones, tablets, and web
- **♿ Accessibility** - Built-in accessibility support

### Development & Testing
- **🧪 Jest Testing** - Pre-configured testing environment
- **📋 ESLint & Prettier** - Code formatting and linting
- **🔧 TypeScript Config** - Optimized TypeScript setup
- **📱 Expo Dev Client** - Enhanced development experience

### API & Services
- **🌐 HTTP Client** - Robust API service with error handling
- **🔐 Authentication Ready** - User management setup
- **📊 Environment Config** - Development/staging/production environments

## 🛠 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd expo-starter-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on device/simulator**
   ```bash
   npm run ios     # iOS simulator
   npm run android # Android emulator
   npm run web     # Web browser
   ```

## 📚 Project Structure

```
├── app/                    # App screens (Expo Router)
│   ├── (tabs)/            # Tab navigation screens
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── assets/                 # Images, fonts, etc.
├── components/            # Reusable UI components
│   ├── ui/               # Platform-specific components
│   └── __tests__/        # Component tests
├── constants/             # App constants (colors, etc.)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── services/             # API services and external integrations
├── store/                # State management (Zustand stores)
├── types/                # TypeScript type definitions
└── scripts/              # Build and deployment scripts
```

## 🧩 Key Components

### State Management
```typescript
// Using Zustand store
import { useAppStore } from '@/store/app-store';

const { user, setUser, logout } = useAppStore();
```

### API Calls
```typescript
// Using the API service
import { api } from '@/services/api';

const userData = await api.get<User>('/user/profile');
```

### Storage
```typescript
// Secure storage for sensitive data
import { storage } from '@/services/storage';

await storage.setSecureItem('token', 'jwt-token');
const token = await storage.getSecureItem('token');
```

### Custom Components
```typescript
import { Button, Input, LoadingSpinner } from '@/components';

<Input 
  label="Email" 
  placeholder="Enter email"
  value={email}
  onChangeText={setEmail}
/>
<Button 
  title="Submit" 
  onPress={handleSubmit}
  variant="primary"
/>
```

## 🎨 Theming

The app supports automatic light/dark mode switching based on system preferences.

### Custom Colors
Edit `constants/Colors.ts` to customize your color scheme:

```typescript
export const Colors = {
  light: {
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#000000',
  },
  dark: {
    primary: '#0A84FF', 
    background: '#000000',
    text: '#FFFFFF',
  },
};
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in CI mode
npm run test:ci

# Run with coverage
npm test -- --coverage
```

## 📱 Building for Production

### EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS
npm run build:ios

# Build for Android  
npm run build:android
```

### Local Builds
```bash
# Generate native code
npm run prebuild

# Build locally (requires Xcode/Android Studio)
npx expo run:ios
npx expo run:android
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` with your configuration:

```bash
API_BASE_URL=https://api.yourapp.com
API_KEY=your_api_key
APP_ENV=development
```

### App Configuration
Update `app.json` for your app:

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug", 
    "bundleIdentifier": "com.yourcompany.yourapp",
    "package": "com.yourcompany.yourapp"
  }
}
```

## 📖 Scripts

- `npm start` - Start development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Expo Documentation](https://docs.expo.dev/)
- 💬 [Expo Discord](https://chat.expo.dev/)
- 🐛 [Issues](../../issues)
- 📧 [Contact](mailto:your-email@example.com)

---

Built with ❤️ using Expo and React Native
