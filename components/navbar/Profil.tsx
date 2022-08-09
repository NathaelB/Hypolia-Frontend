import { Transition, Menu, Tab } from "@headlessui/react"
import {Fragment, useState} from "react";


type Props = {
  user: {
    id: string
    username: string,
    email: string,
    password: string,
    account_id: string
  }
}

const Profil = ({ user }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className="absolute border-t right-0 mt-2 origin-top-right z-50 bg-white w-90 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Items>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List>
              <div className="flex flex-row gap-4">
                <Tab>Ton compte</Tab>
                <Tab>Blabla deux</Tab>
              </div>

            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-col">
                  <div className="flex items-center gap-6">
                    <span className=" inline-block py-1 px-3 text-5xl rounded-full bg-gray-200">{user.username[0]}</span>
                    <div className="flex flex-col ">
                      <span className="text-gray-800 font-bold">{user.username}</span>
                      <span className="text-gray-600 font-light">{user.email}</span>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Menu.Items>
      </div>


    </Transition>
  )
}
    
export default Profil