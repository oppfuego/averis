import type {Metadata} from "next";
import enTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";
import styles from "@/resources/PolicyPage.module.scss";
import enCookie from "@/pageSchemas/cookie-policy/cookiePolicy.en";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enTerms.meta);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ sv: enTerms, en: enTerms }} />
        </div>
    );
}

