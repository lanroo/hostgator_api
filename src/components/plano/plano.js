import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PlanoP from "../../assets/plano-p.svg";
import PlanoM from "../../assets/plano-m.svg";
import PlanoTurbo from "../../assets/plano-turbo.svg";
import Info from "../../assets/info.svg";

import "./plano.css";
export default function Plano(props) {
    const offer = useSelector(redux => redux.offer);
    const { selectedTime } = useSelector(redux => redux.state);
    const [plan, setPlan] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        if (JSON.stringify(offer) !== "{}") setOfferPlan();
    }, [offer]);

    useEffect(() => {
        if (JSON.stringify(offer) !== "{}") setPrices(setOfferTime());
        
    }, [plan, selectedTime, prices]);

    const handleClickContrate = () => {
        window.history.pushState({}, null, `?a=add&pid=${plan.id}&billingcycle=${setBillingCycle()}&promocode=${'PROMOHG40'}`)
    }

    const setBillingCycle = () => {
        switch(prices.months) {
            case 36:
                return 'triennially'
            case 12:
                return 'annually'
            case 1:
                return 'monthly'
            default:
                return 'monthly'
        }
    }

    const setOfferPlan = () => {
        switch (props.plano) {
            case "Plano P":
                setPlan(offer.planoP);
                break;
            case "Plano M":
                setPlan(offer.planoM);
                break;
            case "Plano Turbo":
                setPlan(offer.planoTurbo);
                break;
            default:
                break;
        }
    };

    const renderPlan = () => {
        switch (props.plano) {
            case "Plano P":
                return PlanoP;
            case "Plano M":
                return PlanoM;
            case "Plano Turbo":
                return PlanoTurbo;
            default:
                return PlanoP;
        }
    };

    const setOfferTime = () => {
        switch (selectedTime) {
            case "3 Anos":
                return plan.cycle.triennially;
            case "1 ano":
                return plan.cycle.annually;
            case "1 mês":
                return plan.cycle.monthly;
            default:
                return plan.cycle.monthly;
        }
    };

    const formatToMoney = value => {
        return `R$ ${value.toString().replace(".", ",")}`;
    };
    return (
        <div className="container-plano" id={props.plano}>
            {props.plano === 'Plano M' ? <div className='container-plano-selected-topo'></div> : null}
            <div className="container-img-plano">
                <img alt="plano" src={renderPlan()} />
                <div className="text-1-plano">{props.plano}</div>
            </div>
            <div className="container-price-plano">
                <div className="container-price-text">
                    <div className="price-1">{formatToMoney(prices.priceOrder || "")}</div>
                    <div className="price-2">{formatToMoney((prices.priceOrder * 0.6).toFixed(2) || "")}</div>
                </div>
                <div className="text-2-plano">equivalente a</div>
                <div className="price-3">
                    R${" "}
                    <span className="price-3-bold">
                        {((prices.priceOrder * 0.6) / prices.months).toFixed(2).replace(".", ",")}
                    </span>
                    /mês*
                </div>
                <div className="container-button-plano">
                    <button onClick={handleClickContrate} style={{background: props.plano === 'Plano M' ? '#FF6A17' : ''}}>Contrate Agora</button>
                </div>
                <div className='container-dominio-plano'>
                    1 ano de Domínio Grátis .
                    <img src={Info} alt="info" />
                </div>
                <div className='container-economize-plano'>
                    economize {formatToMoney((prices.priceOrder * 0.4).toFixed(2) || "")}
                    <div className='desconto-40off'>
                        40% off
                    </div>
                </div>
            </div>
            <div className="container-info-plano">
                <span className='info-plano-sublinhado-dash'>{props.plano === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}</span><br/>
                <span className='info-plano-bold'>100 GB</span> de Armazenamento<br/>
                <span className='info-plano-sublinhado-dash'>Contas de E-mail <span className='info-plano-bold'>Ilimitadas</span></span><br/>
                Criador de Sites <span className='info-plano-bold info-plano-sublinhado'>Grátis</span><br/>
                Certificado SSL <span className={props.plano === 'Plano Turbo'? 'info-plano-bold info-plano-sublinhado' : 'info-plano-bold'}>Grátis</span> (https)<br/>
            </div>
            {props.plano === 'Plano M' ? <div className='container-plano-selected-bottom'></div> : null}
        </div>
    );
}






