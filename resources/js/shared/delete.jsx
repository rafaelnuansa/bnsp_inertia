//import react  
import React from "react";

//import inertia router
import { router } from '@inertiajs/react';

//import Sweet Alert
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import { IconTrash } from "@irsyadadl/paranoid";

export default function Delete({ URL, id }) {

	//method destroy
    const destroy = async (id) => {

        //show sweet alert
        Swal.fire({
            title: 'Apa kamu yakin?',
            text: "apa kamu yakin akan menghapus data ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                //delete
                router.delete(`${URL}/${id}`)
                Swal.fire({
                    title: 'Sukses!',
                    text: 'Data Berhasil dihapus!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
          })
    }

    return (
    	<>
    		<Button onClick={() => destroy(id)} className="destructive" size="sm"><IconTrash className="size-4"/></Button>
    	</>
    )

}