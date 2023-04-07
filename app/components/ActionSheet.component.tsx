import { ActionSheet } from "react-native-ui-lib";

export interface ActionSheetComponentProps {
    title: string;
    setVisible: Function;
    visible: boolean;
    options: {
        label: string,
        onPress: Function
    }[];
}

export function ActionSheetComponent({ title, setVisible, visible, options }: ActionSheetComponentProps) {
    return (
        <ActionSheet
            title={title}
            cancelButtonIndex={3}
            useNativeIOS={true}
            destructiveButtonIndex={2}
            visible={visible}
            migrateDialog
            onDismiss={() => setVisible(false)}
            options={options}
        />
    );
}