import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, View } from "react-native";
import Screen from "../component/Screen";
import { categories, coffeeItems } from "../constants";
import Search from "../component/Search";
import HorizontalListings from "../component/HorizontalListings";
import Header from "../component/Header";
import CoffeeCard from "../component/Coffee/CoffeeCard";
import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json
import BgImage from "../component/BgImage";

export default function Home() {
    return (
        <Screen>
            <BgImage opacity={0.1} imageurl={require("../assets/images/beansBackground1.png")} />
            <View className="flex-col grow-1 justify-start "

            >
                <Header />
            </View>
            {/* search bar */}
            <View className=" mx-4 mt-16 z-0 "
            >
                <Search />
                {/* categories */}
                <HorizontalListings categories={categories} />
                {/* Coffee */}

                <Carousel
                    containerCustomStyle={{
                        overflow: "visible",
                        marginTop: 20
                    }}
                    data={coffeeItems}
                    renderItem={({ item }) => <CoffeeCard item={item} />}
                    firstItem={1}
                    inactiveSlideOpacity={0.75}
                    inactiveSlideScale={0.77}
                    sliderWidth={400}
                    itemWidth={260}
                    slideStyle={{ display: "flex", alignItems: "center" }}
                />
            </View>
        </Screen >
    );
}
