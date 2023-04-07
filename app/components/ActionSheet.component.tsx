import { ActionSheet } from "react-native-ui-lib";

export function ActionSheetComponent({ setVisible, visible }) {
    return (
        <ActionSheet
            title={'Manage your Recipe'}
            cancelButtonIndex={3}
            useNativeIOS={true}
            destructiveButtonIndex={2}
            visible={visible}
            migrateDialog
            onDismiss={() => setVisible(false)}
            options={[
                {label: 'Add cover image', onPress: () => {console.log('1')}},
                {label: 'Get sharable link', onPress: () => { console.log('2')}},
                {label: 'Delete', onPress: () => { console.log('3')}},
                {label: 'Cancel', onPress: () => console.log('cancel')}
            ]}
        />
    );
}