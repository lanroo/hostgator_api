import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import product_5 from "../../assets/plano-p.svg";
import product_6 from "../../assets/plano-m.svg";
import product_7 from "../../assets/plano-turbo.svg";
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
                setPlan(offer.product_5);
                break;
            case "Plano M":
                setPlan(offer.product_6);
                break;
            case "Plano Business":
                setPlan(offer.product_7);
                break;
            case "Plano Empreendedor":
                setPlan(offer.product_329);
                break;
            case "Plano Negócios":
                setPlan(offer.product_323);
                break;
            case "Plano Turbo":
                setPlan(offer.product_335);
                break;
            case "Presença Digital":
                setPlan(offer.product_341);
                break;
            default:
                break;
        }
    };

    const renderPlan = () => {
        switch (props.plano) {
            case "Plano P":
                return product_5;
            case "Plano M":
                return product_6;
            case "Plano Business":
                return product_7;
            case "Plano Empreendedor":
                return product_329;
            case "Plano Negócios":
                return product_332;
            case "Plano Turbo":
                return product_335;
            case "Presença Digital":
                return product_341;
            default:
                return product_5;
        }
    };

    const setOfferTime = () => {
        switch (selectedTime) {
            case "1 mês":
                console.log("entrou no 1 mes")
                return shared.products.product_5.cycle.quarterly;
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






