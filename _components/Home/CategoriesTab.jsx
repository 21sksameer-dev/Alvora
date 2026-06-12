import { Tabs } from "@heroui/react";
import { Handbag,
Shirt,
TabletSmartphone,
Lamp } from "lucide-react"
import CategoriesContent from "@/_components/Home/CategoriesContent";

const CategoriesTab = () => {
    return (
        <Tabs className="w-full max-w-full text-center" variant="secondary">
            <Tabs.ListContainer>
                <Tabs.List
                    aria-label="Options"
                    className="*:data-[selected=true]:text-black *:data-[selected=true]:font-semibold w-full *:h-16 *:w-full *:px-3 *:text-sm *:font-normal"
                >
                    <Tabs.Tab id="daily" className="flex flex-col"><Handbag className="size-6"/>For You<Tabs.Indicator className="bg-black"/></Tabs.Tab>
                    <Tabs.Tab id="weekly" className="flex flex-col"><Shirt className="size-6"/>Fashion<Tabs.Indicator className="bg-black"/></Tabs.Tab>
                    <Tabs.Tab id="bi-weekly" className="flex flex-col"><TabletSmartphone className="size-6"/>Electronics<Tabs.Indicator className="bg-black"/></Tabs.Tab>
                    <Tabs.Tab id="monthly" className="flex flex-col"><Lamp className="size-6"/>Home<Tabs.Indicator className="bg-black"/></Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="px-4" id="daily">
                <CategoriesContent />
            </Tabs.Panel>
            <Tabs.Panel className="px-4" id="weekly">
                <h3 className="mb-2 font-semibold">Weekly</h3>
                <p className="text-sm text-gray-600">Manage your weekly tasks and goals.</p>
            </Tabs.Panel>
            <Tabs.Panel className="px-4" id="bi-weekly">
                <h3 className="mb-2 font-semibold">Bi-Weekly</h3>
                <p className="text-sm text-gray-600">Manage your bi-weekly tasks and goals.</p>
            </Tabs.Panel>
            <Tabs.Panel className="px-4" id="monthly">
                <h3 className="mb-2 font-semibold">Monthly</h3>
                <p className="text-sm text-gray-600">Manage your monthly tasks and goals.</p>
            </Tabs.Panel>
        </Tabs>
    );
}


export default CategoriesTab