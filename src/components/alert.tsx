'use client'

import { Modal } from "flowbite-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Alert() {
    const [openAlert, setOpenAlert] = useState(true)

    return (
        <motion.div initial={{ y: 20, x: 0 }} animate={{ y: 0, x: 0 }} exit={{ y: 20, x: 0 }}>
            <Modal show={openAlert} onClose={() => setOpenAlert(false)}>
                <Modal.Body>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-2">
                        This Website is not associated with related tours. This website is just for our group assignment.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-2">
                        If the owner needs to, delete this website from Google you can contact me via email.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        And if you have critics or/and suggestion, you can contact me via email. <Link href='mailto:jiichiro@proton.me' className="font-extrabold">jiichiro@proton.me</Link>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenAlert(false)} className="bg-blue-600 hover:bg-blue-500 text-white">Agree</Button>
                    <Button onClick={() => redirect('https://google.com')}>Disagree</Button>
                </Modal.Footer>
            </Modal>
        </motion.div>
    )
}