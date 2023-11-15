'use client'
import { InputText } from "../form-components/InputText";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { ButtonSecondary } from "@/components/buttons/ButtonSecondary";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTextField, InputTypes } from "ui-form-components";
import { CheckBox } from "../form-components/CheckBox";
import Link from "next/link";

export function FormCreateAccountCustumerOne(){
    
    const router = useRouter()

    const[checked, setChecked] = useState(false)

    function action(){
        checked == false ? setChecked(true): setChecked(false)
    }

    const nome = useTextField({
        required: true, 
        type: {
            regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ '-]+$/,
            message: "O nome não contem ao menos uma letras (maiúsculas e minúsculas), acentuadas ou não, espaços, apóstrofos e hífens." 
        }
    })

    const email = useTextField({
        required: true, 
        type: InputTypes.email
    })

    const password = useTextField({
        required:true,
        type: {
            regex: /^.{8,}$/,
            message: "A senha deve conter no minimo 8 caracteres",
        }

    })

    const repeatPassword = useTextField({
        required:true,
        type: {
            regex: /^.{8,}$/,
            message: "A senha deve conter no minimo 8 caracteres",
        }
    })

    function iqualPassword(){
        return password.value == repeatPassword.value ? true: false
    }

    return(
        <div className="flex flex-col gap-6 w-full">
            <form className="flex flex-col gap-4 w-full" onSubmit={e => e.preventDefault()}>
                <InputText
                    id="Nome"
                    label="Nome"
                    placeholder="Inserir Nome"
                    type="nome"
                    {...nome}
                />
                <InputText
                    id="Email"
                    label="Email"
                    placeholder="Inserir E-mail"
                    type="email"
                    {...email}
                />
                <InputText
                    id="Password"
                    label="Senha"
                    placeholder="Inserir senha"
                    type="password"
                    {...password}
                />
                <InputText 
                    id="Password"
                    label="Repita sua senha"
                    placeholder="Inserir a senha novamente"
                    type="password"
                    required={true}
                    {...repeatPassword}
                />
                <div className="flex flex-row items-start w-full py-2 gap-2 top-auto">
                    <CheckBox
                        text={false}
                        onClick={action}
                        active={checked}
                    />
                    <div className=" flex flex-wrap max-w-[295px] pt-2 gap-1">
                        <p className="font-paragraph2 text-paragraph  top-auto">Li e aceito a</p> 
                        <p className="underline underline-offset-2 font-paragraph2 text-support-info cursor-pointer" onClick={() => {}}>política de privacidade</p>
                        <p className="font-paragraph2 text-paragraph top-auto">e</p> 
                        <p className="underline underline-offset-2 font-paragraph2 text-support-info cursor-pointer" onClick={() => {}}>termos de uso</p>
                        <p className="font-paragraph2 text-paragraph top-auto">do CaldasVisor.</p>     
                    </div>
                </div>
                
            </form>
            <ButtonPrimary
                disabled={!nome.isValid() || !email.isValid() || !iqualPassword() || !password.isValid() || !repeatPassword.isValid() || !checked}
                onClick={()=>router.push('/create-account-customer-two')}
                label="Continuar" 
                large={true} 
                full={true}  
            />
            <ButtonSecondary
                onClick={()=>router.push('/login')}
                label="Cancelar" 
                large={true} 
                full={true}  
            />
        </div>
    )
}