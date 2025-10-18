import type {Metadata} from "next";
import enCookie from "@/pageSchemas/cookie-policy/cookiePolicy.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";
import styles from "@/resources/PolicyPage.module.scss";
import enRefund from "@/pageSchemas/refund-policy/refundPage.en";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enCookie.meta);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{sv: enCookie, en: enCookie}}/>
        </div>
    );
}

