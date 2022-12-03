import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export type SystemColorTypes = "Yellow" | "Blue" | "Red";

export type ConfigContextType = {
  systemColor: SystemColorTypes;
  systemSoundActive: boolean;
  updateSystemSoundActive: (state: boolean) => void;
  updateSystemColor: (state: string) => void;
};

export const ConfigContext = createContext({});

type ConfigProviderPropsType = object & PropsWithChildren;

function ConfigProvider({ children }: ConfigProviderPropsType) {
  const [systemColor, setSystemColor] = useState<SystemColorTypes>("Yellow");
  const [systemSoundActive, setSystemSoundActive] = useState(false);

  async function getStoreSystemColor() {
    try {
      const value = (await AsyncStorage.getItem(
        "@luop:system-color"
      )) as SystemColorTypes;

      if (value) {
        setSystemColor(value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function setStoreSystemColor(value: string) {
    try {
      await AsyncStorage.setItem("@luop:system-color", value);
    } catch (error) {
      console.log(error);
    }
  }

  async function getStoreSystemSoundActive() {
    try {
      const value = await AsyncStorage.getItem("@luop:system-sound-active");

      if (value) {
        setSystemSoundActive(Boolean(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function setStoreSystemSoundActive(value: boolean) {
    try {
      await AsyncStorage.setItem("@luop:system-sound-active", String(value));
    } catch (error) {
      console.log(error);
    }
  }

  function updateSystemColor(state: SystemColorTypes) {
    setStoreSystemColor(state);
    setSystemColor(state);
  }

  function updateSystemSoundActive(state: boolean) {
    setSystemSoundActive(state);
    setStoreSystemSoundActive(state);
  }

  useEffect(() => {
    getStoreSystemSoundActive();
    getStoreSystemColor();
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        systemColor,
        systemSoundActive,
        updateSystemSoundActive,
        updateSystemColor,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;
