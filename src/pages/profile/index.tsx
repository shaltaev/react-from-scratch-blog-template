import React, {FC} from 'react'
import {LayoutDefault} from "~/layouts/default";
import {Header} from "~/components/header";
import {Footer} from "~/components/footer";
import {Aside} from "~/components/Aside";

const PageProfile: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <span>
                    PROFILE
                </span>
            }
            aside={<Aside />}
            footer={<Footer />}
        />
    )
}

export { PageProfile }
