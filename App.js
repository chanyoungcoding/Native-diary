import Navigator from "./navigator";
import Realm from "realm";
import React, {useCallback, useEffect, useState} from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { DBcontext } from "./context";

const FeelingSchema = {
    name: "Feeling",
    properties: {
        _id: "int",
        emotion: "string",
        message: "string",
    },
    primaryKey: "_id",
};

function App() {
    const [ready, setReady] = useState(false);
    const [realm, setRealm] = useState();

    async function startLaoding() {
        try {
            const db = await Realm.open({
                path: "diaryDB",
                schema: [FeelingSchema],
            });
            setRealm(db);
        } finally {
            setReady(true);
        }
        console.log("start Loading");
    }

    useEffect(() => {
        startLaoding();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (ready) {
            await SplashScreen.hideAsync();
            console.log("hide async");
        }
    }, [ready]);

    if (!ready) return null;

    return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
        <DBcontext.Provider value={realm}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </DBcontext.Provider>
    </View>
    );
}

export default App;
