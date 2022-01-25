import React from 'react';
import { useSelector } from 'react-redux';
function Promos() {
    const data = useSelector((state)=>state.checkout)

    return (
    <div className='promos' style={{left: data.show_promos}}>
        <div className="promoheading">Promocodes</div>
        <table >
            <tbody>
                <tr>
                    <th>Promocode</th>
                    {/* <th>discount</th> */}
                    <th>Description</th>
                </tr>
                {data.promotions.map((promo)=>(
                    <tr key={promo.code}>
                        <td>{promo.code}</td>
                        <td>{promo.description}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </div>
  );
}

export default Promos;
