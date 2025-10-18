import type {Metadata} from "next";
import enRefund from "@/pageSchemas/refund-policy/refundPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enRefund.meta);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ sv: enRefund, en: enRefund }} />
        </div>
    );
}

