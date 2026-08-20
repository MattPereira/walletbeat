import type { EvaluationData, WalletNameStrings } from '@/schema/attributes'
import type { ScamPreventionMetadata } from '@/schema/attributes/security/scam-prevention'

import { component, type Content, type Sentence } from '../content'

export interface ScamAlertDetailsProps extends Omit<
	EvaluationData<ScamPreventionMetadata>,
	'outcome'
> {
	metadata: ScamPreventionMetadata

	/** The outcome's short explanation, rendered above the per-feature breakdown. */
	shortExplanation: Sentence<WalletNameStrings>
}

export interface ScamAlertDetailsContent {
	component: 'ScamAlertDetails'
	componentProps: ScamAlertDetailsProps
}

export function scamAlertsDetailsContent(
	bakedProps: Omit<ScamAlertDetailsProps, keyof EvaluationData>,
): Content<{ WALLET_NAME: string }> {
	return component<ScamAlertDetailsContent, keyof typeof bakedProps>('ScamAlertDetails', bakedProps)
}
