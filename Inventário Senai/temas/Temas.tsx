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
    bgHover: "#F39200",
    loginHeader: "#000000",
    cadastroHeader: "#FF0000",
    recSenhaHeader: '#011E83',
    bgButtom: "#000000",
    colorLinks: "#011E83",
    headerBgColor: '#FF0000',
    scannerColor: '#5D5C5C',
    headerTintColor: '#595959'
}
const dark: Cores = {
    bgPrimary: "#240707",
    bgSecundary: "#FF0000",
    textColorPrimary: "#FFFFFF",
    textColorSecundary: "#D9D9D9",
    inputBgPrimary: "#3A2828",
    inputTextPrimary: "#CBCBCB",
    bgHover: "#F39200",
    bgButtom: "#FF0000",
    colorLinks: "#FFFFFF",
    headerBgColor: "#FF0000",
    scannerColor: "#D9D9D9",
    headerTintColor: '#fff',
    loginHeader: '#240707',
    recSenhaHeader: '#240707',
    cadastroHeader: '#240707'
}

export function useColor(){
    const colorScheme = useColorScheme();
  
    if (colorScheme === 'dark') {
        return dark
    } else {
        return light
    }

  
}