'use client'

import { InputText } from "../form-components/InputText";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { ModalCenter } from "@/components/modal/ModalCenter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTextField, InputTypes } from "ui-form-components";

export function FormRecoverPassword(){
    const router = useRouter()
    
    const [showModal, setShowModal] = useState(false);
    
    const password = useTextField({
        required:true,
        type: {
            regex: /^.{8,}$/,
            message: "A senha deve conter no minimo 8 caracteres.",
        }

    })

    const repeatPassword = useTextField({
        required:true,
        type: {
            regex: /^.{8,}$/,
            message: "A senha não está igual a senha informada acima.",
        }
    })

    function iqualPassword(){
        return password.value == repeatPassword.value ? true: false
    }

    function handleSubmbit() {
         setShowModal(true);
    }
    return(
        <div className="flex flex-col gap-6 w-full">
            <form className="flex flex-col gap-4 w-full" onSubmit={e => e.preventDefault()}>
                <InputText

                    id="Password"
                    label="Senha"
                    placeholder="Inserir senha"
                    type="password"
                    {...password}
                />
                <InputText
                    id="Password"
                    label="Repita a senha"
                    placeholder="Inserir senha"
                    type="password"
                    required={true}
                    {...repeatPassword}
                />
                
            </form>
            <ButtonPrimary
                disabled= {!iqualPassword()}
                onClick={() => handleSubmbit()}
                label="Trocar a senha" 
                large={true} 
                full={true}  
            />
            <ModalCenter 
                close={() => setShowModal(false)}
                actionPrimaryButton={()=>router.push('/login')}
                icon="/Sucess.svg"
                show={showModal}
                text={'Sua senha foi trocada, com sucesso, agora de continuidade no uso da plataforma.'}
                title={'Senha trocada com sucesso!!!'}
                labelPrimaryButton="Ir para login"
            />
        </div>
    );
}