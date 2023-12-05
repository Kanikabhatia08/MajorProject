import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51OHPAFSD73ENJEs5YuP2bmKH0FeWyi7WNaomtvwzFUqdx4kFwILWsXpLWVDOfU2VnKaE9i6tnoxXFtDsiZruypW900bvV7LdYO"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };
    return (
        <Elements stripe={stripeTestPromise} options={options}>
            <PaymentForm />
        </Elements>
    )
}