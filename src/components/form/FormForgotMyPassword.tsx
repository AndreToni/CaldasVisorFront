'use client'
import { InputText } from "../form-components/InputText";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { ButtonSecondary } from "@/components/buttons/ButtonSecondary";
import { ModalCenter } from "@/components/modal/ModalCenter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTextField, InputTypes } from "ui-form-components";

export function FormForgotMyPassword(){
    
    const router = useRouter()
    
    const [showModal, setShowModal] = useState(false);

    const email = useTextField({
        required: true, 
        type: InputTypes.email
    })

    function handleSubmbit() {
        setShowModal(true);
    }

    return(
        <div className="flex flex-col gap-6 w-full">
            <form className="flex flex-col gap-4 w-full" onSubmit={e => e.preventDefault()}>
                <InputText
                    id="Email"
                    label="Email"
                    placeholder="Inserir E-mail"
                    type="email"
                    {...email}
                />
            </form>
            <ButtonPrimary
                disabled={!email.isValid()}
                onClick={handleSubmbit}
                label="Enviar e-mail" 
                large={true} 
                full={true}  
            />
            <ButtonSecondary
                onClick={()=>router.push('/login')}
                label="Voltar para o login" 
                large={true} 
                full={true}  
            />
            <ModalCenter 
                close={() => setShowModal(false)}
                actionPrimaryButton={()=>router.push('/login')}
                icon="/Email.svg"
                show={showModal}
                text={'Por favor, verifique a caixa de entrada do seu e-mail para garantir que ele tenha sido realmente enviado. Se o e-mail não foi enviado, clique na opção "Tentar enviar novamente".'}
                title={'E-mail enviado!!!'}
                labelPrimaryButton="Ir para login"
            />
        </div>
    );
}