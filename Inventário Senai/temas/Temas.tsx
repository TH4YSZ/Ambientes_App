import { useColorScheme } from "react-native"

interface Cores {
    bgPrimary: string,
    bgSecundary: string,
    bgInfo?: string,
    textColorPrimary: string,
    textColorSecundary: string,
    inputBgPrimary: string,
    inputTextPrimary: string,
    bgHover: string,
    loginHeader: string,
    recSenhaHeader: string,
    cadastroHeader: string,
    bgButtom: string,
    colorLinks: string,
    headerBgColor: string,
    headerTintColor: string,
    scannerColor: string
}

const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textColorPrimary: "#101010",
    textColorSecundary: "#595959",
    inputBgPrimary: "#F5F5F5",
    inputTextPrimary: "#595959",
    bgHover: "#FF0000",
    loginHeader: "#000000",
    cadastroHeader: "#FF0000",
    recSenhaHeader: '#011E83',
    bgButtom: "#000000",
    colorLinks: "#011E83",
    headerBgColor: '#FF0000',
    scannerColor: '#5D5C5C',
    headerTintColor: '#FFFFFF'
}
const dark: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textColorPrimary: "#101010",
    textColorSecundary: "#595959",
    inputBgPrimary: "#F5F5F5",
    inputTextPrimary: "#595959",
    bgHover: "#FF0000",
    loginHeader: "#000000",
    cadastroHeader: "#FF0000",
    recSenhaHeader: '#011E83',
    bgButtom: "#000000",
    colorLinks: "#011E83",
    headerBgColor: '#FF0000',
    scannerColor: '#5D5C5C',
    headerTintColor: '#595959'
}

export function useColor(){
    const colorScheme = useColorScheme();
  
    if (colorScheme === 'dark') {
        return dark
    } else {
        return light
    }

  
}