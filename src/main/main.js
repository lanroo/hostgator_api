import React, { useEffect } from "react";
import {useDispatch } from "react-redux";

import Header from "../components/header/header";

import ChooseTime from "../components/chooseTime/chooseTime";

import Plano from "../../src/components/plano/plano";
import { Carousel } from "../../src/components/carousel/carousel";

import { planoMenus } from "../../src/helpers/plano.helpers";
import { setOffers } from "../../actions/main.actions";
import api from "../../src/services/api";

import Group from "../assets/group.svg";
import Man from "../../src/assets/man.svg";
import Check from "../assets/check.svg";
import Button from "../assets/button.svg";

import "./main.css";
export default function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        loadingOffers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadingOffers = async () => {
        try {
            const { data } = await api.get("");
            setOffers(dispatch, data.shared.products);
        } catch (err) {}
    };

    const scrollElement = () => {
        document.getElementsByClassName('container-planos')[0].scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <Header />
            <div className="container-topo">
                <div className="container-mains-imgs">
                    <img alt="group" src={Group} />
                </div>
                <div className="container-mains-text">
                    <div className="title-1">Hospedagem de Sites</div>
                    <div className="title-2">
                    Tenha uma hospedagem de sites estável e evite perder visitantes diariamente
                    </div>
                    <div className="text-1">
                        <img src={Check} alt="check" className="main-check" />
                        99,9% de disponibilidade: seu site sempre no ar
                    </div>
                    <div className="container-text-2">
                        <div className="text-2">
                            <img src={Check} alt="check" className="main-check" />
                            Suporte 24h, todos os dias
                        </div>
                        <div className="text-2">
                            <img src={Check} alt="check" className="main-check" />
                            Painel de Controle cPanel
                        </div>
                    </div>
                </div>
                <div className="container-mains-imgs">
                    <img alt="man" src={Man} />
                </div>
            </div>
            <div className='container-button'>
                <img src="{Button}" onClick={scrollElement} alt='Arrow' />
                </div>
                <div className="text-3">Quero pagar a cada:</div>
            <ChooseTime />
            <div className="container-planos">
                <Carousel>
                    {planoMenus.map(plano => (
                        <Plano key={plano} plano={plano} />
                    ))}
                </Carousel>
                {planoMenus.map(plano => (
                    <Plano key={plano} plano={plano} />
                ))}
            </div>
            <div className="confiraCondicoes">*Confira as condições da promoção</div>
        </>
    );
}
            





    


 

