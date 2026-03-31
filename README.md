# GameVault

**Estudiantes:**
- Maria Camila Mejia
- Sebastián Vallejo Perez

## Descripción

GameVault es una aplicación móvil desarrollada en React Native que permite a los usuarios gestionar y explorar su colección de videojuegos. Los usuarios pueden ver el detalle de cada juego, agregar nuevos títulos a su biblioteca y mantenerse al día con las últimas noticias del mundo gaming.

## Instalación y ejecución

> **Requisito previo:** Asegúrate de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) de React Native.

### 1. Clonar el repositorio e instalar dependencias

```sh
git clone <url-del-repositorio>
cd GameVault
npm install
```

### 2. Instalar dependencias de iOS (solo la primera vez o al actualizar dependencias nativas)

```sh
bundle install
cd ios && bundle exec pod install && cd ..
```

### 3. Iniciar el servidor Metro

```sh
npm start
```

### 4. Ejecutar la aplicación

Abre una nueva terminal en la raíz del proyecto y ejecuta:

**Android:**
```sh
npm run android
```

**iOS:**
```sh
npm run ios
```

Si todo está configurado correctamente, la aplicación se abrirá en el emulador de Android, el simulador de iOS o en tu dispositivo conectado.

## Tecnologías utilizadas

"@react-native-masked-view/masked-view": "^0.3.2",
"@react-native-vector-icons/fontawesome-free-solid": "^1.0.0",
"@react-native/new-app-screen": "0.84.1",
"@react-navigation/bottom-tabs": "^7.15.9",
"@react-navigation/native": "^7.2.2",
"@react-navigation/stack": "^7.8.9",
"nativewind": "^4.2.3",
"react": "19.2.3",
"react-native": "0.84.1",
"react-native-gesture-handler": "^2.30.1",
"react-native-reanimated": "^4.3.0",
"react-native-safe-area-context": "^5.7.0",
"react-native-screens": "^4.24.0",
"react-native-worklets": "^0.8.1"
