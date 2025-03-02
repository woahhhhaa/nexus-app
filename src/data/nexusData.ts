import { NexusData } from '../types';

/**
 * This file contains the 2024 textual and numeric thresholds
 * organized into serviceBased and nonServiceBased
 * rulesets for each state.
 */

export const nexusData: NexusData[] = [
  {
    "state": "California",
    "last_updated": "2024-12-01",
    "contributor_id": "system",
    "serviceBased": {
        "income_threshold": 735019,
        "employee_count": null,
        "property_value": 73502,
        "dollarNexusThreshold": "California imposes tax if an out-of-state company's in-state sales exceed $735,019 or 25% of its total sales (2024 level), or if in-state property or payroll exceed $73,502 or 25%&#8203;:contentReference[oaicite:0]{index=0}. This bright-line \"doing business\" standard creates nexus once any one factor passes the threshold.",
        "physicalPresence": "Maintaining any physical presence in California (e.g., an office, store, inventory, or employees in the state) will create corporate tax nexus&#8203;:contentReference[oaicite:1]{index=1}. Even a single part-time employee or property in California generally constitutes nexus.",
        "additionalNexusCriteria": "Aside from dollar thresholds, California also triggers nexus if the company is organized or commercially domiciled in California&#8203;:contentReference[oaicite:2]{index=2}. Note that Public Law 86-272 protections do not apply to sales of services or intangible products&#8203;:contentReference[oaicite:3]{index=3} (they only protect sales of tangible goods).",
        "authoritativeSource": "California Franchise Tax Board",
        "citation_url": "https://www.ftb.ca.gov/file/business/doing-business-in-california.html",
        "notes": "California annually indexes its economic nexus thresholds for inflation&#8203;:contentReference[oaicite:4]{index=4}. Service businesses cannot rely on federal P.L. 86-272 immunity, so exceeding the sales or payroll/property threshold will oblige them to file California income tax."
      },
      "nonServiceBased": {
        "income_threshold": 735019,
        "employee_count": null,
        "property_value": 73502,
        "dollarNexusThreshold": "Same as service-based: more than $735,019 of in-state sales or over $73,502 of property or payroll in California (or 25% of total) will establish nexus&#8203;:contentReference[oaicite:5]{index=5}.",
        "physicalPresence": "Owning or leasing property in California, or having employees/representatives in the state, creates nexus regardless of sales volume&#8203;:contentReference[oaicite:6]{index=6}. Physical presence (even minimal) generally triggers tax obligations for product-based businesses as well.",
        "additionalNexusCriteria": "Importantly, sellers of tangible personal property may be shielded by P.L. 86-272 if their only activity in California is solicitation of orders for tangible personal property shipped from outside&#8203;:contentReference[oaicite:7]{index=7}. However, engaging in unprotected activities (e.g. services, installations) or exceeding the bright-line thresholds means nexus is established.",
        "authoritativeSource": "California Franchise Tax Board",
        "citation_url": "https://www.ftb.ca.gov/file/business/doing-business-in-california.html",
        "notes": "Public Law 86-272 protections apply only to sales of tangible personal property&#8203;:contentReference[oaicite:8]{index=8}. If a product-based business confines in-state activity to solicitation and interstate shipment, California cannot impose net income tax. But any non-solicitation activity or a physical presence beyond solicitation voids that protection."
      }
    },
    {
      "state": "New York",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 1000000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "New York asserts nexus if a corporation's New York receipts are $1 million or more in a taxable year&#8203;:contentReference[oaicite:9]{index=9}. This is a bright-line economic nexus threshold under New York Tax Law.",
        "physicalPresence": "Having any physical presence in New York (e.g., an office, store, warehouse, or employees in the state) creates corporate tax nexus under longstanding rules&#8203;:contentReference[oaicite:10]{index=10}. Even without reaching $1 million in sales, a physical presence will trigger tax obligations.",
        "additionalNexusCriteria": "New York also deems a corporation taxable if it has at least 1,000 credit cards issued to New York customers or 1,000 merchant customer contracts for NY locations&#8203;:contentReference[oaicite:11]{index=11} (a rule targeting credit card companies). As with all states, P.L. 86-272 does not protect service revenue, only solicitation of tangible goods.",
        "authoritativeSource": "New York Tax Law (Article 9-A)",
        "citation_url": "https://www.tax.ny.gov/",
        "notes": "New York's $1 million sales threshold is a bright-line economic nexus standard&#8203;:contentReference[oaicite:12]{index=12}. However, companies with lower sales can still have nexus if they have property or employees in NY. Sellers of services have no federal immunity (P.L. 86-272 covers only tangible goods), so significant economic activity in NY will trigger tax."
      },
      "nonServiceBased": {
        "income_threshold": 1000000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Same $1,000,000 New York receipts threshold applies&#8203;:contentReference[oaicite:13]{index=13}. If a company earns $1M+ from sales of goods into NY, it is subject to the corporate franchise tax (unless fully protected by P.L. 86-272).",
        "physicalPresence": "Any physical presence in New York (property, inventory, employees, or agents) will establish nexus for a goods-based business&#8203;:contentReference[oaicite:14]{index=14}. For example, storing inventory in a New York warehouse or having sales reps in NY creates nexus.",
        "additionalNexusCriteria": "For tangible product sellers, Public Law 86-272 can protect against NY tax if the only in-state activity is soliciting orders for tangible personal property shipped from outside&#8203;:contentReference[oaicite:15]{index=15}. If the company engages in any unprotected activities in NY or meets the $1 million sales threshold, it loses that protection. The special credit card nexus rule (1,000 cards or contracts) can also apply&#8203;:contentReference[oaicite:16]{index=16}.",
        "authoritativeSource": "New York Department of Taxation and Finance",
        "citation_url": "https://www.tax.ny.gov/bus/ct/ct_nexus_guidance.htm",
        "notes": "New York's economic nexus threshold (receipts ≥ $1 million) was part of its corporate tax reform. P.L. 86-272 is still respected for qualifying out-of-state sellers of tangible goods, but New York has adopted the Multistate Tax Commission’s guidance narrowing what activities remain protected (e.g., providing post-sale services in NY can forfeit protection)."
      }
    },
    {
      "state": "New Jersey",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 100000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Effective for tax periods ending on or after July 31, 2023, New Jersey has a bright-line economic nexus: a corporation is deemed to have nexus if it has more than $100,000 of New Jersey receipts in a year&#8203;:contentReference[oaicite:17]{index=17}.",
        "physicalPresence": "Any physical presence in New Jersey (such as an office, warehouse, employees, or property in-state) independently creates nexus under pre-2023 rules&#8203;:contentReference[oaicite:18]{index=18}&#8203;:contentReference[oaicite:19]{index=19}. Physical presence has always been sufficient for New Jersey Corporate Business Tax nexus.",
        "additionalNexusCriteria": "New Jersey also adopted a 200 separate transactions threshold: 200 or more sales transactions delivered to NJ customers in a year will trigger nexus&#8203;:contentReference[oaicite:20]{index=20}. (This applies to service transactions based on where the benefit is received&#8203;:contentReference[oaicite:21]{index=21}.) Note that if a company exceeds these thresholds but its activities are fully protected by P.L. 86-272, it owes only the minimum tax&#8203;:contentReference[oaicite:22]{index=22}.",
        "authoritativeSource": "NJ Division of Taxation – Technical Bulletin TB-108",
        "citation_url": "https://www.nj.gov/treasury/taxation/pdf/pubs/tb/tb108.pdf",
        "notes": "New Jersey’s new nexus standard (>$100k or ≥200 transactions) mirrors the Wayfair sales tax thresholds&#8203;:contentReference[oaicite:23]{index=23}. Service businesses cannot claim P.L. 86-272 protection at all&#8203;:contentReference[oaicite:24]{index=24}, so exceeding the threshold definitively establishes NJ nexus."
      },
      "nonServiceBased": {
        "income_threshold": 100000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Over $100,000 of in-state receipts or 200+ transactions creates a presumption of substantial nexus for New Jersey&#8203;:contentReference[oaicite:25]{index=25}. This includes sales of tangible goods into NJ.",
        "physicalPresence": "Maintaining any property, inventory, or employees in New Jersey constitutes nexus under longstanding law&#8203;:contentReference[oaicite:26]{index=26}. Even without meeting the economic threshold, physical operations in NJ trigger tax obligations.",
        "additionalNexusCriteria": "Even if protected by P.L. 86-272 (i.e., only soliciting sales of tangible goods), a remote seller that exceeds NJ’s $100k/200 transaction threshold will at least owe New Jersey’s minimum tax&#8203;:contentReference[oaicite:27]{index=27}. Exceeding protected solicitation (e.g., doing installations, repairs in NJ) also breaks P.L. 86-272 immunity and triggers full nexus.",
        "authoritativeSource": "NJ Division of Taxation – Technical Bulletin TB-108",
        "citation_url": "https://www.nj.gov/treasury/taxation/pdf/pubs/tb/tb108.pdf",
        "notes": "New Jersey explicitly states that P.L. 86-272 does not shield service or intangible income&#8203;:contentReference[oaicite:28]{index=28} and that exceeding the bright-line thresholds will cause a business to have CBT nexus&#8203;:contentReference[oaicite:29]{index=29}. However, sellers of tangible personal property who remain within P.L. 86-272’s protections are only subject to the CBT minimum tax if they cross the threshold&#8203;:contentReference[oaicite:30]{index=30}."
      }
    },
    {
      "state": "Texas",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Since 2020, Texas uses an economic nexus threshold for its franchise (margin) tax: a business with over $500,000 in Texas-sourced gross receipts in a year is deemed to have nexus for franchise tax&#8203;:contentReference[oaicite:31]{index=31}.",
        "physicalPresence": "Having any physical operations in Texas (employees, offices, inventory, etc.) will create nexus. Prior to the 2020 law change, a physical presence was required for Texas franchise tax nexus&#8203;:contentReference[oaicite:32]{index=32}.",
        "additionalNexusCriteria": "Texas’s $500,000 receipts threshold applies to all types of businesses and is evaluated per legal entity&#8203;:contentReference[oaicite:33]{index=33}. P.L. 86-272 does not apply because Texas’s franchise tax is not strictly an income tax (it’s a gross margin tax), and service revenue isn’t protected by that federal law&#8203;:contentReference[oaicite:34]{index=34}&#8203;:contentReference[oaicite:35]{index=35}.",
        "authoritativeSource": "Texas Comptroller Rule §3.586",
        "citation_url": "https://comptroller.texas.gov/taxes/franchise/faq/nexus.php",
        "notes": "Out-of-state service providers are subject to Texas franchise tax if their Texas-sourced revenue exceeds $500k&#8203;:contentReference[oaicite:36]{index=36}. Even below that, any in-state business location or representative creates nexus. Because P.L. 86-272 only covers net income taxes, it offers no protection from Texas’s franchise tax&#8203;:contentReference[oaicite:37]{index=37}&#8203;:contentReference[oaicite:38]{index=38}."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Texas imposes franchise tax nexus once a seller has more than $500,000 in Texas receipts&#8203;:contentReference[oaicite:39]{index=39}. This threshold applies equally to goods-based businesses.",
        "physicalPresence": "Any physical presence in Texas (such as a store, warehouse, inventory, or employees) will trigger nexus. Texas had always asserted nexus for businesses with in-state physical operations&#8203;:contentReference[oaicite:40]{index=40}.",
        "additionalNexusCriteria": "Because Texas's tax is not a net income tax, P.L. 86-272 does not shield out-of-state sellers of tangible goods from the franchise tax&#8203;:contentReference[oaicite:41]{index=41}. However, Texas provides the same $500k safe harbor: below that, purely remote sellers are not required to file. Above $500k, even a company solely soliciting sales of tangible property is subject to at least the Texas franchise tax (though if no physical presence, it may only owe the no-tax-due report if under the no-tax-due threshold of ~$1.23 million).",
        "authoritativeSource": "Texas Comptroller Rule §3.586",
        "citation_url": "https://comptroller.texas.gov/taxes/franchise/faq/nexus.php",
        "notes": "Texas aligns its economic nexus threshold with its sales tax threshold ($500k)&#8203;:contentReference[oaicite:42]{index=42}. There is no transactions test – the number of sales doesn't matter, only the receipts amount. The federal interstate income tax protections (P.L. 86-272) do not apply to Texas’s franchise tax, so goods sellers are treated the same as service providers in terms of nexus criteria."
      }
    },
    {
      "state": "Pennsylvania",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Pennsylvania imposes a rebuttable presumption of nexus if a corporation has $500,000 or more in Pennsylvania-sourced gross receipts in a tax year&#8203;:contentReference[oaicite:43]{index=43}&#8203;:contentReference[oaicite:44]{index=44}. This economic nexus standard was codified in 2022.",
        "physicalPresence": "Traditional physical presence (property or payroll in Pennsylvania) will create nexus under general principles. Any in-state office, employee, or inventory triggers a filing requirement.",
        "additionalNexusCriteria": "The $500k sales threshold applies regardless of whether the business has a physical presence&#8203;:contentReference[oaicite:45]{index=45}. While it is 'rebuttable,' in practice a service company above that level will be deemed to have substantial nexus. P.L. 86-272 may still protect sellers of tangible goods whose only Pennsylvania activity is solicitation; however, exceeding $500k of sales might prompt scrutiny to see if unprotected activities occur.",
        "authoritativeSource": "Pennsylvania Dept. of Revenue – Corporation Tax Bulletin 2019-04",
        "citation_url": "https://www.revenue.pa.gov/GeneralTaxInformation/Tax%20Law%20Policies%20Bulletins/CorporationTax/Documents/ct_bulletin_2019-04.pdf",
        "notes": "Pennsylvania’s policy asserts economic presence nexus at $500k of sales&#8203;:contentReference[oaicite:46]{index=46}. This particularly affects service businesses (since no P.L. 86-272 protection for them). Even below $500k, other activities (like significant in-state services) can create nexus, but $500k provides a clear bright line."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "$500,000 of Pennsylvania-sourced receipts in a year will create a presumption of nexus&#8203;:contentReference[oaicite:47]{index=47} for a product-based business as well.",
        "physicalPresence": "Owning or leasing property in PA or having employees or agents in PA establishes nexus by physical presence. This remains true regardless of sales volume.",
        "additionalNexusCriteria": "For tangible goods sellers, P.L. 86-272 provides immunity if the only in-state activity is soliciting sales of tangible personal property. Pennsylvania’s $500k economic nexus rule does not override that federal protection&#8203;:contentReference[oaicite:48]{index=48}; however, the state considers $500k+ sales as evidence of “doing business” and might investigate if any unprotected activities (like services or deliveries) occur. The nexus presumption can be rebutted if the company demonstrates it falls under P.L. 86-272.",
        "authoritativeSource": "Pennsylvania Dept. of Revenue – Corporation Tax Bulletin 2019-04",
        "citation_url": "https://www.revenue.pa.gov/GeneralTaxInformation/Tax%20Law%20Policies%20Bulletins/CorporationTax/Documents/ct_bulletin_2019-04.pdf",
        "notes": "Pennsylvania codified its $500,000 sales nexus threshold in 2022, formalizing a policy originally announced in 2019&#8203;:contentReference[oaicite:49]{index=49}. The state acknowledges P.L. 86-272, so companies selling only tangible personal property and engaging solely in protected solicitation can still claim immunity despite crossing the threshold, but they may be required to file a protective return."
      }
    },
    {
      "state": "Massachusetts",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Massachusetts established a bright-line economic nexus presumption: if a corporation has more than $500,000 of Massachusetts sales in a taxable year, it is presumed subject to the corporate excise tax&#8203;:contentReference[oaicite:50]{index=50}&#8203;:contentReference[oaicite:51]{index=51}.",
        "physicalPresence": "Having any Massachusetts physical presence (property, payroll, or an office in-state) has always created nexus. The $500k sales rule simply adds an economic presence standard on top of traditional physical nexus rules.",
        "additionalNexusCriteria": "Massachusetts aggregates affiliated group sales to determine if the $500k threshold is met&#8203;:contentReference[oaicite:52]{index=52}&#8203;:contentReference[oaicite:53]{index=53}. P.L. 86-272 protection does not apply to service or intangible revenue, and Massachusetts explicitly notes that those protections are not afforded to companies selling services or intangible property in Massachusetts&#8203;:contentReference[oaicite:54]{index=54}. Sellers of tangible goods remain protected by P.L. 86-272 for mere solicitation, despite the $500k rule, but must still pay the minimum excise.",
        "authoritativeSource": "830 CMR 63.39.1 (Mass. DOR Regulation)",
        "citation_url": "https://www.mass.gov/regulations/830-CMR-63391-corporate-nexus",
        "notes": "Massachusetts finalized its $500,000 sales threshold for nexus in 2019&#8203;:contentReference[oaicite:55]{index=55}. This rule provides certainty for when an out-of-state business has “substantial economic presence.” Companies that sell only tangible goods can still claim P.L. 86-272 protection, but those selling services or digital goods are fully taxable if sales exceed $500k&#8203;:contentReference[oaicite:56]{index=56}."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "If a business’s Massachusetts receipts exceed $500,000, it has nexus, even if it sells tangible products&#8203;:contentReference[oaicite:57]{index=57}. However, if its activities are limited to protected solicitation of orders for goods, P.L. 86-272 may still apply.",
        "physicalPresence": "Owning property or having employees in Massachusetts creates nexus regardless of sales. Even one Massachusetts-based employee or inventory in MA will trigger the corporate excise tax.",
        "additionalNexusCriteria": "Massachusetts emphasizes that P.L. 86-272 does not shield companies selling services or intangible property&#8203;:contentReference[oaicite:58]{index=58}. Tangible goods sellers over $500k in sales are presumed taxable but can avoid the income-based tax if they strictly stay within P.L. 86-272’s protections (they would still owe the minimum $456 excise). The $500k threshold can consider combined sales of related entities in Massachusetts&#8203;:contentReference[oaicite:59]{index=59}.",
        "authoritativeSource": "830 CMR 63.39.1 (Mass. DOR Regulation)",
        "citation_url": "https://www.mass.gov/regulations/830-CMR-63391-corporate-nexus",
        "notes": "Massachusetts’ nexus regulation confirms economic presence nexus via a sales threshold&#8203;:contentReference[oaicite:60]{index=60}. The rule took effect for tax years beginning 2019. Massachusetts continues to follow the Multistate Tax Commission’s guidance on P.L. 86-272, meaning activities like customer support or telecommuting employees in MA can destroy immunity even for a company selling tangible goods."
      }
    },
    {
      "state": "Illinois",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Illinois has not enacted a specific economic nexus dollar threshold for corporate income tax&#8203;:contentReference[oaicite:61]{index=61}. Instead, Illinois asserts nexus to the full extent permitted by the U.S. Constitution, meaning substantial economic presence can suffice even without a physical presence.",
        "physicalPresence": "Physical presence in Illinois (e.g., an office, property, or employees) creates nexus. Any in-state property or payroll will generally trigger Illinois income tax filing requirements&#8203;:contentReference[oaicite:62]{index=62}.",
        "additionalNexusCriteria": "Illinois law allows taxing a business if it 'earns or receives income in Illinois' to the extent allowed under constitutional standards&#8203;:contentReference[oaicite:63]{index=63}&#8203;:contentReference[oaicite:64]{index=64}. There is no set transaction or sales threshold. However, activities protected by P.L. 86-272 (solicitation of sales of tangible goods) are still immune&#8203;:contentReference[oaicite:65]{index=65}. Illinois formally accepts that P.L. 86-272 and Commerce Clause limitations restrict its reach&#8203;:contentReference[oaicite:66]{index=66}, but it will challenge aggressive claims of protection if a company engages in more than solicitation.",
        "authoritativeSource": "35 ILCS 5/201 & Illinois Dept. of Revenue Letter Ruling IT 23-0019-GIL",
        "citation_url": "https://tax.illinois.gov/research/legalinformation/letterrulings/it/2023/it23-0019-gil.pdf",
        "notes": "Illinois uses an economic presence standard without bright lines&#8203;:contentReference[oaicite:67]{index=67}. For service companies, this means if you have significant Illinois customers and derive Illinois-source income, you likely have nexus, even if all operations are out-of-state. Illinois emphasizes compliance with constitutional nexus limits and P.L. 86-272 for tangible property sellers&#8203;:contentReference[oaicite:68]{index=68}."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No fixed dollar threshold. Illinois taxes corporations deriving income from Illinois sources to the fullest extent allowed by law&#8203;:contentReference[oaicite:69]{index=69}. Even large volumes of sales alone (absent P.L. 86-272 protection) could establish nexus under an economic presence theory.",
        "physicalPresence": "Any physical operations in Illinois create nexus. For example, owning or leasing Illinois property or employing personnel in Illinois will mandate filing.",
        "additionalNexusCriteria": "Illinois follows the principle of 'purposeful direction' of business toward the state. An out-of-state seller of tangible goods who limits activities to protected solicitation can avoid Illinois income tax under P.L. 86-272&#8203;:contentReference[oaicite:70]{index=70}. But if that seller engages in any additional activities in Illinois (installations, services, etc.), or if a company provides services to Illinois customers, Illinois will assert nexus even with no physical presence, relying on economic presence (provided due process is satisfied).",
        "authoritativeSource": "35 ILCS 5/201 & Illinois Dept. of Revenue Letter Ruling IT 23-0019-GIL",
        "citation_url": "https://tax.illinois.gov/research/legalinformation/letterrulings/it/2023/it23-0019-gil.pdf",
        "notes": "Illinois explicitly notes it has *not* adopted a Wayfair-like threshold for income tax nexus&#8203;:contentReference[oaicite:71]{index=71}, but it will impose tax whenever constitutionally permissible. Thus, product-based businesses must monitor their Illinois activities closely: P.L. 86-272 offers a safe harbor only if in-state activities are strictly limited to solicitation of tangible goods orders&#8203;:contentReference[oaicite:72]{index=72}."
      }
    },
    {
      "state": "South Carolina",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "South Carolina has no fixed economic nexus dollar threshold for corporate income tax. Nexus is determined by whether the business has a substantial presence or activities in the state beyond protected solicitation.",
        "physicalPresence": "Any physical presence in South Carolina (property, employees, or an office) will create nexus. For example, having a warehouse or sales reps in SC clearly subjects a corporation to the state’s income tax.",
        "additionalNexusCriteria": "South Carolina was a pioneer in asserting economic nexus via intangible property: in *Geoffrey, Inc. v. S.C.* (1993), the state successfully taxed an out-of-state company whose only contact was licensing intangibles (trademarks) used in-state. Thus, deriving income from South Carolina through intangible or economic exploitation of the market can establish nexus even without physical presence. P.L. 86-272 protects only sellers of tangible goods soliciting orders; service and licensing activities are taxable once they exceed mere solicitation.",
        "authoritativeSource": "Geoffrey, Inc. v. South Carolina (S.C. Supreme Court)",
        "citation_url": "https://www.sccourts.org/opinions/displayOpinion.cfm?caseNo=24001",
        "notes": "South Carolina applies a \"substantial economic presence\" standard. If an out-of-state service provider regularly earns income from South Carolina clients (and is not protected by P.L. 86-272), it likely has nexus. The *Geoffrey* case&#8203;:contentReference[oaicite:73]{index=73} established that even maintaining intangible property (like trademarks or franchise rights) that generate in-state income can create nexus."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No specific dollar threshold. South Carolina will tax corporations doing business in the state or deriving income from in-state sources to the extent allowed by law&#8203;:contentReference[oaicite:74]{index=74}.",
        "physicalPresence": "Having tangible property or personnel in South Carolina triggers nexus. Any in-state store, warehouse, or employee (even temporarily) generally creates a filing obligation.",
        "additionalNexusCriteria": "Licensing intangible property for use in South Carolina (for example, franchising a brand or trademark to SC retailers) constitutes nexus as per *Geoffrey*. Also, conducting services or other business activities in SC beyond solicitation of orders will create nexus. P.L. 86-272 protection covers only sales of tangible personal property; beyond that, nexus attaches.",
        "authoritativeSource": "South Carolina Code § 12-6-230 & case law (Geoffrey v. SC)",
        "citation_url": "https://www.scstatehouse.gov/code/t12c006.php",
        "notes": "South Carolina aggressively pursues income tax from companies with economic presence. The *Geoffrey* decision (upheld by the U.S. Supreme Court’s denial of certiorari) opened the door for many states to tax out-of-state companies with no physical presence. Goods sellers who only solicit orders in SC can still claim P.L. 86-272 immunity, but any additional activity (e.g., deliveries in company vehicles, tech support visits) may create nexus immediately."
      }
    },
    {
      "state": "Oregon",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Oregon has no set revenue threshold for income tax nexus. The state will assert nexus if a company has substantial economic activity in Oregon, even without physical presence, as confirmed by case law&#8203;:contentReference[oaicite:75]{index=75}.",
        "physicalPresence": "Physical presence in Oregon (e.g., an office, employees, inventory, or other property in-state) creates nexus for the corporate excise tax. Any regular in-state business location or agent triggers filing responsibility.",
        "additionalNexusCriteria": "Oregon courts have upheld economic nexus. In *Capital One Auto Finance, Inc. v. Dept. of Rev.* (Or. Tax Ct. 2016), Oregon held that a company can be taxed on income from Oregon customers even with no physical presence&#8203;:contentReference[oaicite:76]{index=76}. Oregon's administrative rules provide that activities like lending to Oregon residents or other business deriving Oregon-source revenue can establish nexus. P.L. 86-272 will protect only the solicitation of tangible personal property sales; it does not shield service revenue or activities like extending credit to Oregon customers (as in the *Capital One* case).",
        "authoritativeSource": "Oregon Tax Court, Capital One Auto Finance, Inc. v. Dept. of Revenue",
        "citation_url": "https://www.courts.oregon.gov/Publications/docs/Tax/TC-MD-130649D.pdf",
        "notes": "Oregon applies a corporate excise tax on companies doing business in the state. 'Doing business' is broadly interpreted: even without a physical footprint, a service or financial company with continuous Oregon clients or income may have nexus. Oregon does have a separate gross receipts tax (Corporate Activity Tax) with its own $1M threshold, but for net income tax, nexus is determined case-by-case under constitutional standards."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No specific dollar threshold for nexus. Oregon taxes any corporation with sufficient economic connections to Oregon (generally any Oregon-source income beyond what is protected by federal law).",
        "physicalPresence": "Owning or renting property in Oregon or having employees/representatives in Oregon creates nexus per se. Any physical presence will subject a product-based business to Oregon’s corporate excise tax.",
        "additionalNexusCriteria": "Oregon does not require physical presence for nexus&#8203;:contentReference[oaicite:77]{index=77}. If a company is regularly exploiting the Oregon market (for example, via intangibles or by conducting substantial sales into Oregon), the state can impose tax. However, sellers of tangible goods can claim P.L. 86-272 immunity if their Oregon activity is limited strictly to solicitation of orders shipped from outside the state. Doing anything more in Oregon (like services, installations, or having local independent contractors) would create nexus.",
        "authoritativeSource": "Or. Admin. Rule 150-317-0020 & relevant case law",
        "citation_url": "https://secure.sos.state.or.us/oard/viewSingleRule.action?ruleVrsnRsn=268604",
        "notes": "Oregon historically required corporate taxpayers to have “substantial nexus” which need not be physical. After the *Wayfair* decision, Oregon’s stance was already aligned with economic presence concepts. Businesses selling services or intangibles into Oregon should evaluate their nexus even if they never set foot in the state. P.L. 86-272 remains available only to sellers of tangible personal property under very limited activities."
      }
    },
    {
      "state": "Washington",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Washington has **no corporate income tax**. Instead, it imposes a Business & Occupation (B&O) gross receipts tax. For reference, the economic nexus threshold for B&O tax is $100,000 of gross receipts into Washington&#8203;:contentReference[oaicite:78]{index=78} (with no transaction count).",
        "physicalPresence": "Physical presence in Washington (e.g., offices, employees, inventory) would create nexus for B&O tax, but since there is no corporate income tax, physical presence mainly impacts other business taxes like B&O and sales tax.",
        "additionalNexusCriteria": "Even without a physical presence, a service company with over $100,000 in Washington receipts is subject to B&O tax&#8203;:contentReference[oaicite:79]{index=79}. P.L. 86-272 does not apply, as Washington has no net income tax. Goods sellers also have a $100,000/annual sales threshold for sales tax purposes in WA.",
        "authoritativeSource": "Washington Dept. of Revenue",
        "citation_url": "https://dor.wa.gov/doing-business/business-and-occupation-tax/physical-and-economic-nexus",
        "notes": "Washington does not levy a corporate income tax (hence `null` thresholds above). Instead, businesses pay a gross receipts tax (B&O). Economic nexus for most B&O classifications is achieved at $100,000 in Washington gross revenue&#8203;:contentReference[oaicite:80]{index=80}. Service businesses that exceed that amount must pay B&O tax. P.L. 86-272 is irrelevant in Washington because it only limits net income taxes&#8203;:contentReference[oaicite:81]{index=81}."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No corporate income tax in Washington (hence no dollar threshold for income tax). The B&O gross receipts tax applies if a company has over $100,000 in Washington revenue&#8203;:contentReference[oaicite:82]{index=82}.",
        "physicalPresence": "Any physical presence (inventory stored in WA, employees, etc.) triggers nexus for Washington’s taxes (B&O and sales tax). But again, there is no corporate income tax to consider.",
        "additionalNexusCriteria": "For completeness: remote sellers of tangible goods into WA are subject to sales tax collection if over $100,000 in sales (the state eliminated its 200-transaction threshold)&#8203;:contentReference[oaicite:83]{index=83}. P.L. 86-272 is not applicable since WA has no income tax.",
        "authoritativeSource": "Washington Dept. of Revenue",
        "citation_url": "https://dor.wa.gov/nexus",
        "notes": "Washington is one of a few states with no corporate income tax&#8203;:contentReference[oaicite:84]{index=84}. Businesses should be aware of the B&O tax and sales tax nexus thresholds instead. The mention of $100,000 above pertains to those taxes, not an income tax nexus."
      }
    },
    {
      "state": "Ohio",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Ohio **does not impose a corporate income tax** on most businesses (it phased out its franchise tax). Ohio instead imposes a gross receipts tax (Commercial Activity Tax, CAT) which has a $150,000 sales threshold for mandatory filing&#8203;:contentReference[oaicite:85]{index=85}.",
        "physicalPresence": "Physical presence in Ohio (like property or employees) previously created nexus under the old franchise tax, but now triggers nexus for the CAT. Since there is no corporate income tax, physical presence mainly has CAT and sales tax implications.",
        "additionalNexusCriteria": "Under the CAT, Ohio deems nexus if a company has over $150,000 in annual Ohio gross receipts. P.L. 86-272 does not apply because CAT is not an income tax. For completeness: financial institutions and certain entities are still subject to specialized Ohio net income taxes, which have their own nexus standards (generally physical presence or economic presence similar to CAT thresholds).",
        "authoritativeSource": "Ohio Rev. Code § 5751.01 et seq.",
        "citation_url": "https://tax.ohio.gov/wps/portal/gov/tax/business/ohio-business-taxes/commercial-activity-tax/commercial-activity-tax",
        "notes": "Ohio repealed its general corporate income tax after 2005, replacing it with the CAT on gross receipts&#8203;:contentReference[oaicite:86]{index=86}. Thus, the thresholds above are `null` because they do not apply to a corporate income tax (which Ohio lacks). The CAT’s bright-line nexus is $150k of Ohio receipts, which affects service and product sellers alike for that tax."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Ohio has no corporate net income tax (hence no threshold). The CAT gross receipts tax applies if >$150k revenue in Ohio&#8203;:contentReference[oaicite:87]{index=87}.",
        "physicalPresence": "Owning property or having employees in Ohio will create nexus for the CAT (and historically did for the old franchise tax). There is no corporate income tax to consider.",
        "additionalNexusCriteria": "For tangible goods sellers, P.L. 86-272 would have protected mere solicitation under an income tax, but since Ohio uses a gross receipts tax, that protection is moot. The CAT applies based on economic thresholds, and sales tax nexus in Ohio follows the $100k sales standard post-Wayfair.",
        "authoritativeSource": "Ohio Department of Taxation",
        "citation_url": "https://tax.ohio.gov/",
        "notes": "Ohio’s approach to taxing businesses is via the Commercial Activity Tax. Companies making sales into Ohio should be mindful of CAT nexus (which is similar to an economic nexus standard). The absence of a corporate income tax means P.L. 86-272 is not a factor in Ohio’s main business tax regime."
      }
    },
    {
      "state": "Alabama",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 538000,
        "employee_count": null,
        "property_value": 54000,
        "dollarNexusThreshold": "Alabama uses a factor presence nexus standard. A company has nexus if during the year it has over $538,000 in Alabama sales&#8203;:contentReference[oaicite:88]{index=88}&#8203;:contentReference[oaicite:89]{index=89}, or over $54,000 in Alabama property or payroll (these thresholds were set for 2019 and adjust with inflation).",
        "physicalPresence": "Physical presence in Alabama (having any property, inventory, or employees in the state) will create nexus. Alabama’s law specifically says that corporations organized or domiciled in AL automatically have nexus&#8203;:contentReference[oaicite:90]{index=90}, and those with in-state property/payroll above $54k certainly do.",
        "additionalNexusCriteria": "Nexus is also established if 25% or more of the company’s total property, payroll, or sales are in Alabama&#8203;:contentReference[oaicite:91]{index=91}. Public Law 86-272 protection is respected: if an out-of-state corporation’s only activity in Alabama is solicitation of orders for tangible personal property (no beyond-solicitation activity), then Alabama’s factor presence thresholds do *not* apply&#8203;:contentReference[oaicite:92]{index=92}.",
        "authoritativeSource": "Ala. Code § 40-18-31.2; Alabama DOR Nexus FAQ",
        "citation_url": "https://www.revenue.alabama.gov/faqs/does-our-corporation-have-nexus-in-alabama/",
        "notes": "Alabama adopted bright-line nexus thresholds effective 2015, updated in 2019&#8203;:contentReference[oaicite:93]{index=93}. These thresholds (e.g., $538k sales) are subject to CPI adjustments. Service companies exceeding any factor threshold must file Alabama income tax. Sellers of tangible goods who stay within P.L. 86-272 (solicitation only) are not subjected to the factor thresholds&#8203;:contentReference[oaicite:94]{index=94}."
      },
      "nonServiceBased": {
        "income_threshold": 538000,
        "employee_count": null,
        "property_value": 54000,
        "dollarNexusThreshold": "Same thresholds: more than $538,000 of Alabama sales, or >$54,000 of property or payroll in Alabama, or 25% of total property/payroll/sales, will create nexus&#8203;:contentReference[oaicite:95]{index=95}&#8203;:contentReference[oaicite:96]{index=96}.",
        "physicalPresence": "Any physical operation in Alabama (warehouse, store, employees) triggers nexus. The factor thresholds simply quantify when economic presence alone is sufficient.",
        "additionalNexusCriteria": "For a tangible goods seller, if activities are limited to mere solicitation protected by P.L. 86-272, Alabama will *not* enforce the factor presence nexus rule&#8203;:contentReference[oaicite:97]{index=97}. But if the seller engages in any unprotected activities in Alabama or exceeds the factor thresholds in property/payroll, nexus is established. Also, 25% of total factor in Alabama is an alternative test (for large multistate firms).",
        "authoritativeSource": "Ala. Code § 40-18-31.2; Alabama DOR Nexus FAQ",
        "citation_url": "https://www.revenue.alabama.gov/faqs/does-our-corporation-have-nexus-in-alabama/",
        "notes": "Alabama was one of the first to codify factor presence nexus. A business with significant Alabama economic footprints is taxable even without traditional physical presence. Alabama explicitly states that P.L. 86-272-protected companies (pure solicitation of tangible goods) are not subject to the factor thresholds&#8203;:contentReference[oaicite:98]{index=98}."
      }
    },
    {
      "state": "Tennessee",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": 50000,
        "dollarNexusThreshold": "Tennessee has adopted factor presence nexus: more than $500,000 of in-state receipts creates nexus&#8203;:contentReference[oaicite:99]{index=99}. Additionally, owning over $50,000 of property or paying over $50,000 of compensation in Tennessee (or 25% of total property/payroll/sales) will establish nexus&#8203;:contentReference[oaicite:100]{index=100}.",
        "physicalPresence": "Physical presence (property or employees) in Tennessee creates nexus. The bright-line thresholds ($50k property/payroll) formalize this: having property or payroll above those small amounts in TN triggers the franchise & excise taxes.",
        "additionalNexusCriteria": "If 25% or more of a company’s total sales, property, or payroll are in Tennessee, nexus is established by rule&#8203;:contentReference[oaicite:101]{index=101}. As usual, P.L. 86-272 protects only solicitation of tangible goods sales. Tennessee’s nexus thresholds apply to both its excise (income) tax and franchise (capital) tax, but an out-of-state seller of tangible goods can claim P.L. 86-272 immunity from the excise tax if its Tennessee activity is limited to solicitation.",
        "authoritativeSource": "Tenn. Code Ann. § 67-4-2004(49)",
        "citation_url": "https://publications.tnsosfiles.com/rules/1320/1320-06/1320-06-01.20191125.pdf",
        "notes": "Tennessee's bright-line nexus standard (effective 2016) uses $500k sales or $50k property/payroll or 25% factor tests&#8203;:contentReference[oaicite:102]{index=102}. Service companies with Tennessee sales over $500k need to file Tennessee franchise and excise taxes. Tangible goods sellers can still invoke P.L. 86-272 for the excise (income) tax portion if their only TN activity is solicitation; however, they may still owe the franchise tax (which is based on capital) even if protected from excise tax."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": 50000,
        "dollarNexusThreshold": ">$500,000 of Tennessee receipts, or >$50,000 of property or payroll in TN, or 25% of total factors, will create nexus&#8203;:contentReference[oaicite:103]{index=103}.",
        "physicalPresence": "Any property or payroll in Tennessee above $50,000 (a low bar) triggers nexus under the factor presence rule&#8203;:contentReference[oaicite:104]{index=104}. Essentially, any significant physical presence obligates the company for TN taxes.",
        "additionalNexusCriteria": "25% factor presence is an alternative test: if a quarter of a company’s nationwide sales or property or payroll are in TN, it has nexus&#8203;:contentReference[oaicite:105]{index=105}. P.L. 86-272 remains a consideration: a company selling tangible goods might exceed $500k sales in TN but if all activities are protected solicitation, it would not owe excise (income) tax (though Tennessee might assert it still owes the minimum tax or franchise tax).",
        "authoritativeSource": "Tenn. Code Ann. § 67-4-2004(49)",
        "citation_url": "https://publications.tnsosfiles.com/rules/1320/1320-06/1320-06-01.20191125.pdf",
        "notes": "Tennessee’s nexus thresholds mirror the Multistate Tax Commission model (50k/50k/500k/25%)&#8203;:contentReference[oaicite:106]{index=106}. Out-of-state businesses crossing these lines must file in TN. Note: Tennessee’s taxes include both an Excise Tax on net income and a Franchise Tax on capital. P.L. 86-272 can only potentially apply to the Excise Tax (net income tax)."
      }
    },
    {
      "state": "Colorado",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": 50000,
        "dollarNexusThreshold": "Colorado follows the factor presence nexus standard: more than $500,000 of Colorado sales in a year creates nexus&#8203;:contentReference[oaicite:107]{index=107}&#8203;:contentReference[oaicite:108]{index=108}. Likewise, over $50,000 of Colorado property or $50,000 of payroll will establish nexus, as will having 25% of total sales, property, or payroll in Colorado.",
        "physicalPresence": "Any physical presence (property or payroll) in Colorado exceeding $50,000 in value triggers nexus by regulation&#8203;:contentReference[oaicite:109]{index=109}. In practice, any non-trivial physical presence (even below that threshold) would likely create nexus under constitutional standards.",
        "additionalNexusCriteria": "Having more than 25% of the company’s total property, payroll, or sales in Colorado is an alternative nexus test&#8203;:contentReference[oaicite:110]{index=110}. P.L. 86-272 is acknowledged: Colorado’s guidance states that even if the $500k sales threshold is exceeded, a taxpayer selling tangible goods might still claim P.L. 86-272 protection if its only Colorado activity is solicitation&#8203;:contentReference[oaicite:111]{index=111}. Any activities beyond solicitation (for a goods seller) or any service revenue would make the threshold fully applicable.",
        "authoritativeSource": "1 Colo. Code Regs. 201-2, Rule 39-22-301(1)",
        "citation_url": "https://www.colorado.gov/pacific/sites/default/files/Income%20Tax%20GIL%2016-001.pdf",
        "notes": "Colorado’s factor presence rule was adopted in 2010. Service companies with Colorado sales over $500k need to file Colorado income tax&#8203;:contentReference[oaicite:112]{index=112}. Colorado acknowledges P.L. 86-272 for tangible property sellers: those exceeding $500k sales but soliciting only may file a protective return claiming exemption&#8203;:contentReference[oaicite:113]{index=113}, but generally the bright-line applies."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": 50000,
        "dollarNexusThreshold": "Colorado sets nexus if sales in-state exceed $500,000&#8203;:contentReference[oaicite:114]{index=114}. The property/payroll thresholds are $50,000 each, or 25% of total&#8203;:contentReference[oaicite:115]{index=115}.",
        "physicalPresence": "Possessing property or having employees in Colorado beyond $50,000 in value triggers nexus&#8203;:contentReference[oaicite:116]{index=116}. In essence, any meaningful physical presence will cause an obligation to file.",
        "additionalNexusCriteria": "25% of total factor in Colorado is a nexus trigger as well. For a tangible goods seller, Colorado respects P.L. 86-272: mere solicitation of sales, even if sales exceed $500k, remains protected&#8203;:contentReference[oaicite:117]{index=117}. But if the company performs services in Colorado (which are not protected) or otherwise goes beyond solicitation, the nexus threshold and tax will apply.",
        "authoritativeSource": "1 Colo. Code Regs. 201-2, Rule 39-22-301(1)",
        "citation_url": "https://www.colorado.gov/pacific/sites/default/files/Income%20Tax%20GIL%2016-001.pdf",
        "notes": "Colorado’s bright-line nexus provisions align with the Multistate Tax Commission’s model&#8203;:contentReference[oaicite:118]{index=118}. Companies should note that while $500k of sales is a key threshold, physical presence is not required for Colorado to assert jurisdiction. P.L. 86-272 offers limited relief for sellers of tangible property who confine activities to solicitation&#8203;:contentReference[oaicite:119]{index=119}."
      }
    },
    {
      "state": "Connecticut",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Connecticut has an economic nexus statute that provides a bright-line test: if a company has $500,000 or more in Connecticut-sourced receipts in a year, it is deemed to have substantial economic presence in CT&#8203;:contentReference[oaicite:120]{index=120}&#8203;:contentReference[oaicite:121]{index=121}.",
        "physicalPresence": "Physical presence (e.g., having office or employees in Connecticut) creates nexus as a matter of course. Connecticut’s economic nexus rule extends taxability even to those without physical presence, but physical presence remains an independent basis for nexus.",
        "additionalNexusCriteria": "Even below $500k, Connecticut may assert nexus if a company’s economic contacts (frequency, systematic nature of business in CT) are significant&#8203;:contentReference[oaicite:122]{index=122}&#8203;:contentReference[oaicite:123]{index=123}. Also, Connecticut explicitly taxes income from the use of intangible property in the state if the receipts attributable to CT meet the $500k threshold&#8203;:contentReference[oaicite:124]{index=124}&#8203;:contentReference[oaicite:125]{index=125}. P.L. 86-272 protects only tangible property solicitation; service businesses and intangible licensing are not immune. Connecticut uses market-based sourcing for services, so out-of-state service providers with large CT revenues can be subject to tax.",
        "authoritativeSource": "Conn. Gen. Stat. § 12-216a; CT DRS IP 2010(29.1)",
        "citation_url": "https://portal.ct.gov/DRS/Publications/Informational-Publications/2010/IP-2010291",
        "notes": "Connecticut’s $500,000 economic nexus threshold took effect in 2010&#8203;:contentReference[oaicite:126]{index=126}&#8203;:contentReference[oaicite:127]{index=127}. It represents a “substantial economic presence” test. Service companies with Connecticut customers should track in-state receipts. Tangible goods sellers remain protected by P.L. 86-272 if only soliciting orders; however, if a goods seller has $500k+ sales and engages in any unprotected activities (or if it sells services), nexus and tax apply."
      },
      "nonServiceBased": {
        "income_threshold": 500000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "$500,000 or more of Connecticut receipts in a taxable year creates a presumption of nexus&#8203;:contentReference[oaicite:128]{index=128}. This applies to any business, including those selling tangible goods (subject to P.L. 86-272 caveats).",
        "physicalPresence": "Owning/leasing property or having employees in Connecticut will create nexus by default. Connecticut’s bright-line test mainly matters for companies with no such physical presence.",
        "additionalNexusCriteria": "Connecticut can also assert nexus for intangible income sourced to CT: for example, licensing a trademark to CT businesses could trigger tax if it yields ≥$500k CT receipts&#8203;:contentReference[oaicite:129]{index=129}&#8203;:contentReference[oaicite:130]{index=130}. P.L. 86-272 offers protection to sellers of tangible personal property engaging solely in solicitation, regardless of sales volume, so a goods seller at $500k+ might still be exempt if it strictly confines activities to solicitation of orders shipped from outside.",
        "authoritativeSource": "Conn. Gen. Stat. § 12-216a; CT DRS IP 2010(29.1)",
        "citation_url": "https://portal.ct.gov/DRS/Publications/Informational-Publications/2010/IP-2010291",
        "notes": "Connecticut uses market-based sourcing and an economic nexus standard. It was one of the early adopters of taxing out-of-state companies purely on economic presence&#8203;:contentReference[oaicite:131]{index=131}. Companies deriving significant Connecticut income, even without local personnel or facilities, are within reach of the Connecticut Corporation Business Tax if receipts ≥ $500k. Always consider P.L. 86-272 for tangible goods scenarios: Connecticut must honor it, but note that many activities (especially services/digital goods) fall outside its scope."
      }
    },
    {
      "state": "Hawaii",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 100000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Hawaii adopted an economic nexus law effective 2020: a business with more than $100,000 in Hawaii-sourced gross income in the current or preceding year is presumed to be doing business in Hawaii&#8203;:contentReference[oaicite:132]{index=132}.",
        "physicalPresence": "Physical presence in Hawaii (such as an office, property, or employees) clearly creates nexus. Hawaii's law specifically targets companies lacking physical presence, so any actual physical presence would automatically satisfy nexus.",
        "additionalNexusCriteria": "In addition to the $100k sales threshold, having 200 or more separate business transactions with Hawaii customers in a year will also establish nexus&#8203;:contentReference[oaicite:133]{index=133}. These thresholds are a rebuttable presumption of nexus. P.L. 86-272 protection remains for sellers of tangible goods—Hawaii’s statute does not override federal law&#8203;:contentReference[oaicite:134]{index=134} (though service and intangible sales are not protected by P.L. 86-272).",
        "authoritativeSource": "2020 Hawaii Session Laws, SB 495 (HRS § 235-‎)",
        "citation_url": "https://files.hawaii.gov/tax/legal/tir/tir20-05.pdf",
        "notes": "Hawaii was the first state to explicitly extend Wayfair-like thresholds to income tax&#8203;:contentReference[oaicite:135]{index=135}&#8203;:contentReference[oaicite:136]{index=136}. Service businesses crossing $100k in Hawaii revenue or 200 transactions must file Hawaii net income tax. If a business has no physical presence and is below both thresholds, it generally won’t have nexus. Sellers of tangible goods have no safe harbor beyond these thresholds except P.L. 86-272: Hawaii honors P.L. 86-272 protections&#8203;:contentReference[oaicite:137]{index=137}, so a company only soliciting sales of tangible property might avoid tax even above $100k if it conducts no unprotected activities in-state."
      },
      "nonServiceBased": {
        "income_threshold": 100000,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Hawaii presumes nexus if a remote seller has over $100,000 of gross income from Hawaii or at least 200 transactions into Hawaii&#8203;:contentReference[oaicite:138]{index=138}. This applies to goods sellers as well, though P.L. 86-272 could still protect purely solicitation-based sales of tangible goods&#8203;:contentReference[oaicite:139]{index=139}.",
        "physicalPresence": "Any physical presence in Hawaii creates nexus irrespective of the dollar/transaction thresholds. Maintaining inventory or employees in Hawaii, for instance, triggers corporate income tax nexus under traditional standards.",
        "additionalNexusCriteria": "The 200 transactions threshold is an alternative to the $100k threshold&#8203;:contentReference[oaicite:140]{index=140}. Hawaii’s law is a rebuttable presumption, meaning a taxpayer can attempt to show it does not have nexus despite crossing a threshold, but crossing it generally implies sufficient economic presence. P.L. 86-272 remains available only to sellers of tangible property soliciting orders; it offers no protection for service sales or for ancillary activities in Hawaii&#8203;:contentReference[oaicite:141]{index=141}.",
        "authoritativeSource": "2020 Hawaii Session Laws, SB 495; Hawaii TIR 2020-05",
        "citation_url": "https://files.hawaii.gov/tax/legal/tir/tir20-05.pdf",
        "notes": "Hawaii’s economic nexus standard (>$100k or 200 transactions) for income tax&#8203;:contentReference[oaicite:142]{index=142} aligns with its sales tax (GET) nexus. This significantly affects remote retailers and service providers. However, if a company’s only Hawaii activity is soliciting orders for tangible personal property (with orders fulfilled from outside HI), P.L. 86-272 provides immunity from Hawaii net income tax&#8203;:contentReference[oaicite:143]{index=143}."
      }
    },
    {
      "state": "Virginia",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": 0,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Virginia does not have a set sales or income threshold; effectively, *any* Virginia-sourced income can create nexus. Virginia asserts that if a corporation has any positive apportionment factor (property, payroll, or sales) in Virginia, then it has nexus&#8203;:contentReference[oaicite:144]{index=144}&#8203;:contentReference[oaicite:145]{index=145}.",
        "physicalPresence": "Any physical presence (even minimal) in Virginia triggers nexus. For example, owning property or having an employee in Virginia for even part of the year would result in a positive Virginia apportionment factor, thus creating nexus&#8203;:contentReference[oaicite:146]{index=146}.",
        "additionalNexusCriteria": "Virginia’s economic presence rule is very broad: having just $1 of Virginia sales (and no property/payroll) technically gives a positive sales factor and thus nexus&#8203;:contentReference[oaicite:147]{index=147}. In practice, Virginia expects businesses with any meaningful activity in the state to file. P.L. 86-272 still applies to Virginia’s corporate income tax, so an out-of-state seller of tangible goods whose only VA activity is protected solicitation can avoid tax. But Virginia follows the MTC guidance on what ancillary activities (like cookies or online chat functions) might terminate P.L. 86-272 protection&#8203;:contentReference[oaicite:148]{index=148}.",
        "authoritativeSource": "VA Code § 58.1-400; VA Tax Rulings (e.g. Ruling 19-2)",
        "citation_url": "https://www.tax.virginia.gov/laws-rules-decisions/rulings-tax-commissioner/19-2",
        "notes": "Virginia’s nexus standard is essentially *any* economic presence (often paraphrased as any positive apportionment factor)&#8203;:contentReference[oaicite:149]{index=149}. There is no safe harbor threshold like $100k; even small amounts of Virginia sales can create filing obligations. Service companies with a single Virginia client may technically have nexus. However, Virginia cannot tax a company whose only Virginia activity is soliciting sales of tangible property, per P.L. 86-272."
      },
      "nonServiceBased": {
        "income_threshold": 0,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Virginia has no minimum dollar threshold – any amount of Virginia sales (> $0) means a positive Virginia sales factor, which under Virginia’s policy establishes nexus&#8203;:contentReference[oaicite:150]{index=150}.",
        "physicalPresence": "Any property or payroll in Virginia guarantees nexus (since that yields a positive factor). For example, one part-time employee or a small inventory stock in VA suffices.",
        "additionalNexusCriteria": "Virginia considers a company to have nexus if it is “doing business” in the state to any extent. If a tangible goods seller’s only VA activity is protected solicitation, it can claim P.L. 86-272 immunity. But if it engages in any unprotected activity (e.g., making repairs in VA, providing services, etc.), then nexus attaches immediately (with no de minimis threshold). The absence of a threshold means even a single transaction (if not protected) can trigger nexus.",
        "authoritativeSource": "VA Code § 58.1-400; Rulings of the VA Tax Commissioner",
        "citation_url": "https://www.tax.virginia.gov/nexus",
        "notes": "Virginia’s stance effectively requires any corporation with income apportioned to Virginia to file a return&#8203;:contentReference[oaicite:151]{index=151}. This aggressive position means product-based businesses must carefully confine in-state activities to stay within P.L. 86-272 if they wish to avoid Virginia tax. Virginia also taxes pass-through entities via composite returns for nonresident owners, which can create additional nexus considerations."
      }
    },
    {
      "state": "Florida",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Florida has no explicit economic nexus threshold for corporate income tax. The tax applies to every corporation doing business in Florida or earning income from Florida sources&#8203;:contentReference[oaicite:152]{index=152}. There is no bright-line sales or transaction threshold in statute.",
        "physicalPresence": "Having physical presence in Florida (such as an office, store, employees, or inventory) constitutes 'conducting business' in the state and creates nexus&#8203;:contentReference[oaicite:153]{index=153}. Florida imposes its corporate tax on any corporation for the privilege of conducting business or deriving income in Florida.",
        "additionalNexusCriteria": "Florida will assert nexus over out-of-state companies to the extent allowed by the Constitution. For example, licensing intangible assets for use in Florida or providing services to Florida customers on a regular basis can create nexus, even without a physical office in Florida. P.L. 86-272 protects sellers of tangible personal property who engage only in solicitation in Florida (no offices or reps). Florida uses cost-of-performance sourcing for services (not market-based), which can limit Florida-source income for some service businesses without in-state operations.",
        "authoritativeSource": "Fla. Stat. § 220.11(1)",
        "citation_url": "https://floridarevenue.com/taxes/taxesfees/Pages/corporate.aspx",
        "notes": "Florida’s corporate income tax nexus is based on traditional 'doing business' concepts&#8203;:contentReference[oaicite:154]{index=154}. Unlike many states, Florida has not enacted a specific economic nexus threshold (e.g., no Wayfair-style rule for income tax). Service companies generally need some Florida presence or Florida-source income (determined by sourcing rules) to be taxable. If a company’s only Florida activity is soliciting sales of tangible goods with orders approved out of state, P.L. 86-272 immunizes it from Florida’s income tax."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No fixed threshold. Any corporation deriving income from Florida or doing business in Florida is subject to the corporate tax&#8203;:contentReference[oaicite:155]{index=155}, absent federal protections.",
        "physicalPresence": "A physical presence in Florida (property, inventory, agents, or employees) will establish nexus. For example, operating a distribution center or having a salesforce in Florida clearly triggers tax.",
        "additionalNexusCriteria": "Florida will also tax an out-of-state company that earns Florida-source income even without physical presence, if constitutionally permitted. For tangible goods sellers, this usually means that if they have no property or employees in FL except soliciting orders (protected by P.L. 86-272), they won’t be taxed. But if they go beyond solicitation (e.g., perform installation or consulting services in Florida), they create nexus. Florida’s lack of a defined economic threshold means each case is facts-and-circumstances.",
        "authoritativeSource": "Fla. Stat. § 220.11(1)",
        "citation_url": "https://floridarevenue.com/taxes/taxesfees/Pages/corporate.aspx",
        "notes": "Florida taxes corporations for the 'privilege of conducting business, earning or receiving income in Florida'&#8203;:contentReference[oaicite:156]{index=156}. That broad definition covers most scenarios of in-state activity. Florida’s adoption of market-based sourcing (effective 2023) for sales of intangibles/services may increase what is considered Florida-source income, potentially pulling more out-of-state companies into nexus if they have significant sales to Florida customers even without physical presence."
      }
    },
    {
      "state": "Georgia",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Georgia’s law does not specify a numeric economic nexus threshold for corporate income tax. It taxes every corporation doing business in the state or deriving income from Georgia sources&#8203;:contentReference[oaicite:157]{index=157}. (Georgia did lower its sales tax nexus threshold to $100k for sales tax, but that does not explicitly apply to income tax.)",
        "physicalPresence": "Physical presence in Georgia (offices, employees, warehouses, etc.) creates nexus. Georgia imposes its corporate income tax on any corporation owning property or doing business in Georgia&#8203;:contentReference[oaicite:158]{index=158}.",
        "additionalNexusCriteria": "Georgia source income can create nexus even without a physical presence. Georgia’s code explicitly taxes corporations deriving income from sources within Georgia&#8203;:contentReference[oaicite:159]{index=159}. In practice, this means activities like servicing Georgia clients or licensing intangibles for use in Georgia could trigger nexus if substantial enough. P.L. 86-272 protects sellers of tangible goods who limit in-state activity to solicitation. Georgia has a separate annual net worth (franchise) tax for corporations which may apply even if income tax is shielded by P.L. 86-272.",
        "authoritativeSource": "O.C.G.A. § 48-7-31",
        "citation_url": "https://dor.georgia.gov/corporate-income-tax-faqs",
        "notes": "Georgia has not formally enacted an economic nexus threshold (like $X sales) for corporate income tax; it relies on general “doing business or deriving income” language&#8203;:contentReference[oaicite:160]{index=160}. In 2020, Georgia considered factor presence rules but currently none are codified for income tax. Service companies with significant Georgia revenues but no physical presence should assess nexus carefully. Georgia uses market-based sourcing for services from 2020 onward, which could attribute income to Georgia and thereby create a filing obligation even without physical presence."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "No specific economic nexus threshold is in Georgia law for corporate tax. Any income from Georgia sources or business activity in Georgia can subject a corporation to tax&#8203;:contentReference[oaicite:161]{index=161}.",
        "physicalPresence": "Owning or leasing property or having employees in Georgia will invariably establish nexus. For example, a distribution center or sales office in Georgia triggers corporate tax obligations.",
        "additionalNexusCriteria": "Georgia’s regulations and court rulings indicate that purposeful direction of business toward Georgia (economic presence) can create nexus if it meets constitutional standards. The state has a corporate net worth tax that may apply if a company is registered or has property in Georgia. P.L. 86-272 provides immunity for interstate sellers of tangible goods engaged solely in solicitation in Georgia, despite the general “deriving income” clause.",
        "authoritativeSource": "O.C.G.A. § 48-7-31",
        "citation_url": "https://dor.georgia.gov/corporate-income-tax-faqs",
        "notes": "While Georgia has no explicit dollar threshold, it participates in the general trend of asserting nexus to the extent allowed. Companies should treat any nontrivial Georgia-related business (especially recurring revenue from Georgia customers) as potentially creating nexus. Georgia’s enforcement may focus on those with physical presence or clear economic targets in the state, rather than isolated de minimis transactions."
      }
    },
    {
      "state": "North Carolina",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "North Carolina has not established a quantitative economic nexus threshold for corporate income tax. The state taxes any corporation whose business operations in North Carolina create sufficient connection (nexus) under constitutional standards. There is no Wayfair-type sales threshold in the income tax context as of 2024.",
        "physicalPresence": "Physical presence in North Carolina (property or employees) will create nexus. N.C. levies its corporate income tax on every domestic corporation and every foreign corporation doing business in the state&#8203;:contentReference[oaicite:162]{index=162}. Having an office, store, inventory, or personnel in NC clearly meets this test.",
        "additionalNexusCriteria": "North Carolina’s law implies nexus for deriving income from NC sources as well. An out-of-state service provider with significant NC customers could be seen as “doing business” in NC even without physical presence, although NC has not publicized a bright-line (the state will rely on the general ‘minimum contacts’ standard). Note that North Carolina is phasing out its corporate income tax by 2030 (rate reductions each year). P.L. 86-272 remains in effect for NC: a company soliciting sales of tangible goods in NC with no further activity is protected.",
        "authoritativeSource": "N.C. Gen. Stat. § 105-130.3 and § 105-130.11",
        "citation_url": "https://www.ncdor.gov/documents/nexus-and-pl-86-272-corporate-income-and-franchise-tax",
        "notes": "North Carolina’s nexus policy for corporate tax is based on “doing business in the state or deriving income from sources in the state.” It has not (yet) enacted an explicit economic nexus statute for income tax akin to those for sales tax. With the corporate tax rate decreasing (2.5% in 2024, 0% by 2030), enforcement focus may shift. Nonetheless, service companies with continuous business in NC should not assume no nexus simply due to lack of a threshold. If uncertain, North Carolina provides guidance via ruling requests."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "None. North Carolina requires every corporation doing business in the state or receiving income from NC sources to file, without a specified dollar safe harbor.",
        "physicalPresence": "Owning property or having employees in NC triggers nexus. For example, storing inventory in North Carolina or sending employees to work regularly in NC would create nexus.",
        "additionalNexusCriteria": "North Carolina can assert nexus on an economic presence basis (e.g., licensing intangibles used in NC or earning significant revenue from NC) if constitutionally permissible. However, no fixed transaction or revenue threshold exists. P.L. 86-272 protection applies for sales of tangible personal property; North Carolina also imposes a franchise tax on capital for corporations with nexus, which is not covered by P.L. 86-272.",
        "authoritativeSource": "N.C. Gen. Stat. § 105-130.3 and § 105-130.11",
        "citation_url": "https://www.ncdor.gov/documents/nexus-and-pl-86-272-corporate-income-and-franchise-tax",
        "notes": "North Carolina’s corporate tax rate is scheduled to drop to 0% by 2030, but until then nexus determinations remain relevant. A product-based business that confines its NC activity to solicitation can avoid NC’s income tax under P.L. 86-272, though it may still owe the state’s franchise tax. North Carolina's lack of a bright-line nexus rule means case-by-case analysis; the state tends to follow general Commerce Clause principles for nexus."
      }
    },
    {
      "state": "Minnesota",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Minnesota has no specific economic nexus threshold in its law. It imposes its corporate franchise (income) tax on all corporations with Minnesota taxable income, which generally means any corporation doing business in Minnesota or having income sourced to Minnesota&#8203;:contentReference[oaicite:163]{index=163}.",
        "physicalPresence": "A physical presence (property or payroll) in Minnesota creates nexus under traditional standards. Minnesota taxes domestic corporations and foreign corporations doing business in the state (franchise tax based on net income)&#8203;:contentReference[oaicite:164]{index=164}.",
        "additionalNexusCriteria": "Minnesota’s Department of Revenue can assert nexus for out-of-state companies if their economic contacts in Minnesota meet constitutional requirements. Minnesota uses market-based sourcing for sales of services and intangibles, so substantial sales to Minnesota customers can create Minnesota taxable income which implies nexus. P.L. 86-272 protects tangible goods solicitation in Minnesota as in other states.",
        "authoritativeSource": "Minn. Stat. § 290.02",
        "citation_url": "https://www.revenue.state.mn.us/businesses/Corporation",
        "notes": "Minnesota refers to its corporate income tax as a 'franchise tax' measured by net income&#8203;:contentReference[oaicite:165]{index=165}. There is no bright-line economic nexus law, but large remote sellers of services or intangibles to Minnesota residents should be mindful of potential nexus. Physical presence in Minnesota – even a traveling employee or inventory stored at a third-party location – will trigger nexus."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "None. Minnesota taxes every corporation with Minnesota-source income (no safe harbor threshold).",
        "physicalPresence": "Having any property or employees in Minnesota establishes nexus. For instance, a company with a distribution center in Minnesota is clearly subject to tax.",
        "additionalNexusCriteria": "Minnesota will likely consider a corporation with significant economic activity (sales) in Minnesota to have nexus, consistent with constitutional standards (though no set $ amount is defined). Sellers of tangible personal property who limit activities to solicitation can claim P.L. 86-272 immunity. Minnesota also imposes a minimum fee based on factors if certain thresholds of property, payroll, or sales in Minnesota are exceeded, even if the income tax liability is small.",
        "authoritativeSource": "Minn. Stat. § 290.015; § 290.191 (apportionment)",
        "citation_url": "https://www.revenue.state.mn.us/sites/default/files/2011-11/corp_instructions_11.pdf",
        "notes": "Minnesota’s corporate tax regime does not include a Wayfair-style nexus threshold. The state relies on case-by-case analysis of nexus. Companies should note Minnesota’s “minimum fee” which is an additional tax if Minnesota property, payroll, or sales exceed certain levels (e.g., $980k of sales for 2024). This implies Minnesota monitors those economic factors even absent a formal nexus threshold."
      }
    },
    {
      "state": "Missouri",
      "last_updated": "2024-12-01",
      "contributor_id": "system",
      "serviceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "Missouri has not adopted an economic nexus threshold for corporate income tax. A corporation is subject to Missouri income tax if it is doing business in Missouri or has Missouri-source income. There is no explicit dollar or transaction threshold in statute&#8203;:contentReference[oaicite:166]{index=166}.",
        "physicalPresence": "Physical presence in Missouri (e.g., property or payroll) constitutes doing business and creates nexus&#8203;:contentReference[oaicite:167]{index=167}. Missouri taxes corporations that are domiciled in or conduct business activity within the state.",
        "additionalNexusCriteria": "Missouri’s definition of doing business can include economic presence if it meets constitutional muster, but Missouri has not been aggressive in pursuing companies without physical presence. Generally, a corporation with revenue from Missouri (for example, licensing intangible property used in Missouri or providing services to Missouri customers) could have nexus if those activities are systematic and significant. P.L. 86-272 protects sellers of tangible property soliciting orders in Missouri (the state must rely on physical presence or unprotected activities to tax them).",
        "authoritativeSource": "Mo. Rev. Stat. § 143.431",
        "citation_url": "https://dor.mo.gov/taxation/business/tax-types/corporation/",
        "notes": "Missouri’s corporate income tax nexus standard remains tied to physical presence and in-state activities&#8203;:contentReference[oaicite:168]{index=168}. The state has not publicly asserted an economic threshold. With a relatively low corporate tax rate (4%), Missouri’s focus has been on clear-cut nexus situations. Service companies with occasional Missouri clients typically may not be pursued, but regular conduct of business in Missouri (even without property) can trigger nexus depending on the extent."
      },
      "nonServiceBased": {
        "income_threshold": null,
        "employee_count": null,
        "property_value": null,
        "dollarNexusThreshold": "None. Missouri law simply requires filing if a corporation is doing business in Missouri or has income from Missouri sources, with no numeric safe harbor.",
        "physicalPresence": "Any in-state inventory, warehouse, office, or employees will create nexus and an obligation to file Missouri corporate tax.",
        "additionalNexusCriteria": "Missouri can assert nexus for non-physical economic presence if significant (though it hasn’t established bright lines). Activities like having franchisees in Missouri or licensing IP to Missouri businesses (generating royalties) could potentially create nexus. Public Law 86-272 provides immunity for companies whose only Missouri activity is soliciting sales of tangible personal property for out-of-state fulfillment.",
        "authoritativeSource": "Mo. Rev. Stat. § 143.431; 12 CSR 10-2.045",
        "citation_url": "https://dor.mo.gov/legal/rules/",
        "notes": "In summary, Missouri requires a corporate tax return from any corporation with sufficient business activity in the state&#8203;:contentReference[oaicite:169]{index=169}. There is no specific economic nexus law beyond the general standard. Out-of-state sellers of goods often rely on P.L. 86-272 in Missouri. As always, engaging in unprotected activities (like services, installations in MO) would create nexus immediately."
      }
    }
  ]
  