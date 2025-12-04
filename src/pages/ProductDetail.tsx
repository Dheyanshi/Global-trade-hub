import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Package, Shield, Award, Truck, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';

// Import product images
import slurryPumpsImage from '@/assets/slurry-pumps-category.jpg';
import hdpeFittingsImage from '@/assets/hdpe-fittings-category.jpg';
import toolsImage from '@/assets/tools-category.jpg';
import hdpeValvesImage from '@/assets/hdpe-valves.jpg';
import horizontalSlurryPumpImage from '@/assets/horizontal-slurry-pump.jpg';
import verticalSlurryPumpImage from '@/assets/vertical-slurry-pump.jpg';
import electrofusionFittingsImage from '@/assets/electrofusion-fittings.jpg';
import buttFusionFittingsImage from '@/assets/butt-fusion-fittings.jpg';
import hdpeBallValveImage from '@/assets/hdpe-ball-valve.jpg';
import centrifugalSlurryPumpImage from '@/assets/centrifugal-slurry-pump.jpg';
import gravelDredgingPumpImage from '@/assets/gravel-dredging-pump.jpg';
import zjZgbSlurryPumpImage from '@/assets/zj-zgb-slurry-pump.jpg';
import highPressurePumpImage from '@/assets/high-pressure-pump.jpg';
import frothPumpImage from '@/assets/froth-pump.jpg';
import pumpPartsImage from '@/assets/pump-parts.jpg';
import customizedToolkitsImage from '@/assets/customized-toolkits.png';
import insulatedToolsImage from '@/assets/insulated-tools.png';
import nonSparkingToolsImage from '@/assets/non-sparking-tools.png';
import shMetalLinedPumpImage from '@/assets/sh-metal-lined-pump.jpeg';
import shrRubberLinedPumpImage from '@/assets/shr-rubber-lined-pump.jpg';
import slSmSlurryPumpImage from '@/assets/sl-sm-slurry-pump.jpg';
import shhSlurryPumpImage from '@/assets/shh-slurry-pump.jpg';
import wnPumpImage from '@/assets/wn-pump.jpg';
import svSvrVerticalPumpImage from '@/assets/sv-svr-vertical-slurry-pump.jpg_560xaf.jpeg';
import zjlVerticalPumpImage from '@/assets/zjl-slurry-pump.jpg_560xaf.jpeg';
import gravelPumpImage from '@/assets/gravel-pump.jpg_560xaf.jpg';
import zjslurryPumpImage from '@/assets/zj-slurry-pump.jpg_560xaf.jpeg';
import zgbslurryPumpImage from '@/assets/zgb-slurry-pump.jpg_560xaf.jpeg';
import sfPump from '@/assets/sf-pump.jpg_560xaf.jpeg';
import shfPump from '@/assets/shf-pump.jpg_560xaf.jpeg';
import puParts from '@/assets/pu-parts.jpg_560xaf.jpeg';
import rubberParts from '@/assets/rubber-parts.jpg_560xaf.jpeg';
import metalParts from '@/assets/metal-parts.jpg_560xaf.jpeg';
import efEqualCouplerImage from '@/assets/hdpe-pipe-fittings/ef-equal-coupler.jpg';
import efEndCapImage from '@/assets/hdpe-pipe-fittings/ef-end-cap.jpg';
import ef45ElbowImage from '@/assets/hdpe-pipe-fittings/ef-45-elbow.jpg';
import ef90ElbowImage from '@/assets/hdpe-pipe-fittings/ef-90-elbow.jpg';
import efEqualTeeImage from '@/assets/hdpe-pipe-fittings/ef-equal-tee.jpg';
import efreducingTeeImage from '@/assets/hdpe-pipe-fittings/ef-rreducing-tee.jpg';
import efReducerImage from '@/assets/hdpe-pipe-fittings/ef-reducer.jpg';
import efStubEndImage from '@/assets/hdpe-pipe-fittings/ef-stub-end.jpg';
// import efFemaleThreadImage from '@/assets/ef-female-thread.jpg';
// import efMaleThreadImage from '@/assets/ef-male-thread.jpg';
// import efCrossTeeImage from '@/assets/hdpe-pipe-fittings/ef-cross-tee.jpg';
import shpShppPumpImage from '@/assets/hdpe-pipe-fittings/Shpp-high-pressure-pumps.jpeg'
import bfEndCapImage from '@/assets/hdpe-pipe-fittings/bf-end-cap.jpg';
// import bf225ElbowImage from '@/assets/hdpe-pipe-fittings/';
import bf45ElbowImage from '@/assets/hdpe-pipe-fittings/bf-45-elbow.jpg';
import bf90ElbowImage from '@/assets/hdpe-pipe-fittings/bf-90-elbow.jpg';
import bfFlangeImage from '@/assets/hdpe-pipe-fittings/bf-flange.jpg';
import bfEqualTeeImage from '@/assets/hdpe-pipe-fittings/bf-equal-tee.jpg';
import bfReducingTeeImage from '@/assets/hdpe-pipe-fittings/bf-reducing-tee.jpg';
import bfReducingCouplingImage from '@/assets/hdpe-pipe-fittings/bf-reducing-coupling.jpg';
import bfReducingCrossImage from '@/assets/hdpe-pipe-fittings/bf-reducing-cross.jpg';
import { features } from 'process';
interface SubcategoryDetails {
  name: string;
  description: string;
  image: string;
  features?: string[];
  specifications: {
    [key: string]: string;
  };
}

interface ProductDetails {
  description?: string | string[];
  features?: string[];
  specifications?: {
    [key: string]: string;  // Allow any specification key-value pairs
  };
}

const productNameMap: { [key: string]: string } = {
  'sh-metal-lined-slurry-pump': 'SH Metal Lined Slurry Pump',
  'shr-rubber-lined-slurry-pump': 'SHR Rubber Lined Slurry Pump',
  'slsm-slurry-pump': 'SL/SM Slurry Pump',
  'shh-slurry-pump': 'SHH Slurry Pump',
  'sv-svr-vertical-slurry-pump': 'SV/SVR Vertical Sump Pumps',
  'zjl-vertical-sump-pump': 'ZJL Vertical Sump Pumps',
  'gravel-pump': 'Gravel Pump',
  'zj-slurry-pump': 'ZJ Slurry Pump',
  'zgb-slurry-pump': 'ZGB Slurry Pump',
  'sf-pump': 'SF Pump',
  'shf-pump': 'SHF Froth Pump',
  'metal-parts': 'Metal Parts',
  'rubber-parts': 'Rubber Parts',
  'wn-pump': 'WN Pump',
  'pu-parts': 'PU Parts',
  'shpshpp-high-pressure-pumps': 'SHP/SHPP High Pressure Pumps',
  'ef-equal-coupler': 'EF Equal Coupler',
  'ef-end-cap': 'EF End Cap',
  'ef-90elbow': 'EF 90 Degree Elbow',
  'ef-45elbow': 'EF 45 Degree Elbow',
  'ef-reducer': 'EF Reducer',
  'ef-equal-tee': 'EF Equal Tee',
  'ef-reducing-tee': 'EF Reducing Tee',
  'ef-stub-end': 'EF Stub End',
  'ef-female-thread-coupler': 'EF Female Thread Coupler',
  'ef-male-thread-coupler': 'EF Male Thread Coupler',
  'ef-cross-tee': 'EF Cross Tee',
  'butt-fusion-45elbow': 'Butt Fusion 45 Degree Elbow',
  'butt-fusion-90elbow': 'Butt Fusion 90 Degree Elbow',
};

// Add this const before the ProductDetail component
const productDetailsMap: { [key: string]: ProductDetails } = {
  'sh-metal-lined-slurry-pump': {
    description: [
      "Metal lined centrifugal horizontal slurry pumps are classified as heavy duty slurry pumps.",
      "Specifically designed for pumping highly abrasive and high-density slurry materials.",
      "Can be installed in multistage series under allowable pressure conditions.",
      "Optimized for lowest total cost of ownership while maintaining highest quality standards.",
      "Provides comprehensive solution including equipment, spare parts, and engineering support.",
      "Engineered for heavy-duty industrial applications and harsh slurry environments.",
      "Features wear-resistant cast alloys for pump liners and impellers.",
      "Ideal for applications with coarse or sharp-edged particles.",
      "Suitable for high impeller peripheral velocities and high operating temperatures.",
      "Backed by specialized slurry pump expertise and technical support."
    ],
    features: [
      "Modular design, easy to maintain with replaceable spare parts;",
      "Wide options of impellers of standard 5 vanes , 4 vanes high efficiency and 2 vanes non-clogging;",
      "27% Chrome alloy hard metal, thick rubber and polyurethane pump lining are available and can be replaced with each other;",
      "Standard ductile iron pump body, can withstand higher working pressure;",
      "Famous brand bearing components can improve reliability, prolong bearing life and reduce lubrication cost;",
      "Reliable shaft seal, packing seal, expeller seal, or mechanical seal are available;"
    ],
    specifications: {
      discharge_size: "1\" to 18\"",
      capacity: "5,000 m³/h",
      head: "73 m",
      pressure: "2100 kPa"
    }
  },
  'shr-rubber-lined-slurry-pump': {
    description: [
    "Rubber lined slurry pumps are similar to metal lined slurry pumps in structure, but rubber lined slurry pumps are more cable of withstanding highly abrasive and corrosive small particles without sharp edges.",
    "The inner linings of our factory can be made of several kinds of materials according to customer’s requests, for example, High chrome-A05 material, PU, rubber material.",
    ],
    features: [
      "The rubber lining is made from special materials and it has a higher corrosion and abrasion tolerance.",
      "Slurry pump's bearing assembly use cylindrical structure, adjusting the space between impeller and front liner easily. They can be removed completely when being repaired. Rubber lined pumps can be repaired, just replace the liners.",
      "Expeller, mechanical or packing seal is available for use, depending on your own requirements."
    ],
    specifications: {
      discharge_size: "1\" to 18\"",
      capacity: "5,000 m³/h",
      head: "73 m",
      handling_solids_to: "130mm"
    }
  },
  'slsm-slurry-pump': {
    description: [
      "M series slurry pumps, with its encapsulated design, are similar to the SH series pumps, but M series slurry pumps have a significantly reduced physical size compared to the SH pumps.",
      "M(R) is a kind of middle duty slurry pump. It is used to transfer the fine particle size and middle density slurries.",
      "The impellers, and liners of M series slurry pumps can be replaced and materials can be either metal or rubber. The application of M series is in metallurgy, mining, mineral processing, dredging, coal washing, tailing, etc.",
      "The commonly used 10x8E-SM Medium Duty Slurry Pump is mainly suitable for pumping medium concentration slurries. 10x8E-SM slurry pump applies in coal wash processing, handling with the fine ore and tailing in metal mining etc."
    ],
    specifications: {
      discharge_size: "0.75\" to 26\"",
      capacity: "10,225 m³/h",
      head: "	55m",
      pressure_to: "1030 kPa"
    }
  },
  'shh-slurry-pump': {
    description: [
    "The High Head Slurry Pumps are heavy-duty slurry pumps which are able to transfer high-density and abrasive slurries in heavy industry and mining sites, coal washing plant, power plant, metallurgy, dredging and other industrial departments. With thick wear parts and heavy-duty support, SHH series could run in series in the allowable range of pump working pressure.",
    "The liner and impeller of SHH model can be changeable and material can be either anti-abrasive metal or rubber but material of liner and impeller of HH model only can be metal version.",
    ],
    features: [
      "Heavy-duty pump",
      "Suitable for pumping liquid to high heights",
      "Slow speeds due to large impeller diameters",
      "suitable for all types of sludges",
      "Solid concentrations up to 70 percent weight",
      "Housing pressure up to 34bar",
      "Coarse Sand",
      "Mineral Concentration"
    ],
    specifications: {
      discharge_size: "1\" to 6\"",
      capacity: "16.2-1008 m³/h",
      head: "12-118m",
      handling_solids_to: "0-70mm"
    }
  },
  'sv-svr-vertical-slurry-pump': {
    description: [
    "Vertical Centrifugal Pump can operate normally without shaft gland and shaft gland water even lack of insufficient suction volume. SP pump body is made from anti-friction metals, and the impeller is made from anti-friction metal or rubber and polyurethane. Submerged parts of the SPR pump coated rubber for transportation corrosive slurry.",
    ],
    features: [
      "Abrasive and/or corrosive slurries",
      "Large particle size",
      "High slurry densities",
      "Continuous or “snore” operations",
      "Heavy duties demanding cantilevered shafts"
    ],
    specifications: {
      discharge_size: "40 – 250 mm or 1.5 – 10 inches",
      capacity: "Up to 1,180 m3/h or 5,200 US gpm",
      head: "Up to 55 m or 180 feet",
      working_pressure: "750 kPa or 110 psi"
    }
  },
  'zjl-vertical-sump-pump': {
    specifications: {
      discharge_size: "40 – 150 mm or 1.5 – 6 inches",
      capacity: "Up to 364 m3/h or 1600 US gpm",
      head: "Up to 55 m or 180 feet",
      working_Pressure:	"750 kPa or 110 psi"
    }
  },
  'gravel-pump': {
    description: [
    "The SG(SGH)pumps are designed for the transportation of strong abrasive materials whose particles are too large to be transported by general slurry pump. They are suitable for delivering slurries in Mining, Dredging in dredger and course of rivers, and other fields.  Single casing with broad flow pathway as well as decreased NPSHr makes these pumps as a best selection for dredging.",
    ],
    features: [
      "Enhanced slurry pump system format streamlines maintenance procedure, ensures long life span, and also match the pump for strong jobs of pumping slurries with large solids.",
      "Unique design to make maintenance and wet parts replacement convenient.",
      "Wide flow passage enables a big volume of slurry to pass. The sand and also crushed rock slurry pumps are specially made to manage high-abrasion applications that normal pumps can not even try.",
      "Continuous or “snore” operations",
      "Excellent NPSH performance, long service life, high efficiency ,which can meet many poor transport conditions.",
      "The discharge direction of pump can be oriented in any direction of 360°.",
      "Driving type mainly have V belt drive, elastic coupling drive, gear reducer drive, hydraulic coupling drive, variable frequency driven etc.",
      "Shaft seal choices: packaging gland seal, centrifugal seal, and mechanical seal. Customers can conveniently change one sort of seal with an additional in order match the particular pumping application."
    ],
    specifications: {
      discharge_size: "4\"-16\"",
      capacity: "	3,200 m³/h",
      head: "73 m",
      handing_solids_to: "254 mm"
    }
  },
  'wn-pump': {
    description: [
    "WN /WNQ series dredging pump is a single state, single suction, cantilever, horizontal type, it is divided into two kinds of structures according to the size of pressure discharging single and double pump casing.",
    "200 ~ 500 WN uses the single shell structure, 600 ~ 1000 WN uses the double pump housing structure. The double pump housing design may guarantee the long term security reliable movement. 600 ~ 1000 WNQ uses the single pump housing structure. It may use the grease lubrication or the oil lubrication with the base."  
    ],
    features: [
      "The special construction, the bridge, the harbor, the river, the civil engineering drain off water using.",
      "The sand graduated field, the cement depot, and the kiln industry sewage removes.",
      "The sedimentation pool, organic sewage, dirt mud discharges.",
      "The water of underground, subway, building foundation, underground spring discharges.",
      "The water accumulation of civil engineering, spring water, sewage, the basement, the concave land discharge.",
    ],
    specifications: {
      discharge_size: "200mm-1000mm",
      capacity: "25000m³/h",
      head: "76m",
      handling_solids_to: "350mm"
    }
  },
  'zj-slurry-pump': {
    specifications: {
      discharge_size: "40-350mm",
      capacity: "2300m",
      head: "133m",
      handling_solids_to: "125 mm"
    }
  },
  'zgb-slurry-pump': {
    specifications: {
      discharge_size: "40-350mm",
      capacity: "2300m",
      head: "133m",
      handling_solids_to: "125 mm"
    }
  },
  'sf-pump': {
    description: [
    "The FROTH PUMP SF series is a new generation of products. Now, it is widely used in metallurgical, mining, coal, chemical and other industrial sectors. It is mostly used to handle abrasive or corrosive frothy slurries, mainly in flotation.",
  "It can still work normally under the case of material shortages, and features a wide choice for various flotation processes. It is an ideal product for conveying foam pulp."
 ],
    features: [
      "Hard metal lined vertical froth pumps SF series have been designed to increase the pumpability of frothy slurry. The principle of operation is similar to that of hydrocyclone separation.",
      "Standard pumps are supplied with parts in wear resistant high chrome iron alloy, with a nominal hardness of 58-65HRC.",
      "The SF froth pump is ideal for all applications involving handling of air entrained slurries, such as flotation froth in base metal concentrators, phosphate and apatite washing plants and calcium carbonate upgrading plants. The pump can also be used as a mixing and distribution unit, where dry powder has to be mixed with water."
    ],
    specifications: {
      discharge_size: "2 – 8 inches",
      capacity: "Up to 650 m3/h",
      head: "Up to 30 m",
      handing_solids_to: "79mm"
    }
  },
  'shf-pump': {
    description: [
    "Based on the SH design, but specifically designed for pumping froth. The innovative SH Horizontal Froth pump design allows for froth and other products to be handled efficiently and without issues usually associated with pumping products with high viscosity.",
    "An inducer blade impeller encourages positive froth feed. A widened slurry throat bush reduces NPSH required and optimises the inlet size, allowing for froth to be pumped with maximum efficiency.",
    ],
    features: [
      "Wide slurry throatbush reduces NPSH required and optimises inlet size",
      "Interchangeable with the standard SH bearing assembly, drive end and shaft, thereby reducing site inventory levels",
      "Wet end uses standard SH frame plate liners and frame plates",
      "Inducer blade impeller encourages positive froth feed",
      "K-HS Pump can be changed into a SH with a few small modifications"
    ],
    specifications: {
      discharge_size: "2 – 8 inches",
      capacity: "Up to 650 m3/h",
      head: "Up to 30 m",
      handing_solids_to: "79mm"
    }
  },
  'metal-parts': {
    specifications: {
      'material':	'L05, L49 , L51,L61',
      'ph':	'4-12'
    }
  },
    'rubber-parts': {
      description: [
    "Longteng slurry pump rubber wet parts are great wear resistance and corrosion resistance, usually used for acid working conditions. Such as tailing in mining industry, slurry with small particles and no rough edges.",
    "The replaceable parts includes Impeller,Cover Plate Liner, Throat bushing, Frame plate liner, Frame Plate Liner Insert. The rubber spare parts are made of Natural Rubber, code is SR26, SR55 and SR33 and other special designed according to site which guarantees excellent performance including wear resistance, chemical resistance , waterproof and higher operating temperature range from -40-75."
   ],
    specifications: {
      'material':	'Natural rubber, EPDM, NBR'
    }
  },
    'pu-parts': {
      description: [
    "PU Slurry Pump Parts: Current elastomer parts available in SU01 include the following",
    "Liners, 041, 018, 036, etc",
    "Impellers, and Throatbushes, available in all sizes."
   ],
    features: [
      "SU01 is suitable for fine to medium particle erosive slurry applications.",
      "Liners: maximum particle size = 10mm.",
      "Minimum pH: 1",
      "Maximum pH: 14",
      "Maximum Temperature (°C): 70",
      "Maximum Particle Size (mm): 10",
      "Excluding Tramp",
      "Maximum Tip Speed (m/sec): 30"
    ],
    specifications: {
      'material':	'Polyurethane',
      'pH': '5-8'
    }
  },
  'shpshpp-high-pressure-pumps': {
    description: [
    "SHP/SHPP higher-pressure capability allows the user to operate several pumps in series, all consolidated into one pump house. This high-pressure slurry pump is perfect to handle high-density slurry applications with a very high pressure around 6900 kPa."    ],
    features: [
      "SHPP, compared with SH series, is a high-pressure pump and has a bigger bearing frame.",
      "When SH slurry pumps can’t be used under high working pressure exceeding 2100kPa, SHPP slurry pumps can be provided.",
    ],
    specifications: {
      discharge_size: "100 – 450 mm or 4 – 18 inches",
      capacity: "Up to 6,700 m3/h or up to 29,600 US gpm",
      head: "Up to 88 m or up to 280 feet",
      working_pressure: "6,900 kPa or 1,000 psi"
    }
  },
  'butt-fusion-equal-tee': {
    description: [
    "HDPE butt fusion fitting is one of three main methods of connecting the pipes, The consultant engineer will determine the pipe connection method according to the facilities available at the time of work in the specifications of the design. At the moment, the butt fusion connection is used for the main projects of HDPE piping and the flange connection is used for special fittings. HDPE Butt Fusion fitting will be reached a solid connection to avoid leakage, on the other hand, compared with socket fusion fittings, the maxmum size of butt fusion equal tee can reached to 800mm and satisfy some project which need large dimensions, of cause, products advantages as below:",
    "High corrosion resistance, long service life.",
    "PE has excellent chemical stability, good flexibility.",
    "Light weight, easy to install and lower transport and maintenance.",
    "Nontoxic, no Leakage, higher flow capacity.",
    "The inside pipe wall is extremely smooth and difficult to leave over dirt.",
    "Recycled and environment-friendly.",
    "Applied to water supply, drainage, industrial liquid, municipal works, agricultural irrigation etc."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn63mm-dn800mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.',
      loading_port: 'Ningbo or Shanghai, China'
    }
  },
  'butt-fusion-end-cap': {
    description: [
    "HDPE butt fusion end caps are commonly used in pipe work to dead end the flow of  water. we can offer HDPE end caps in diameters ranging from 75mm to 1200mm in SDR11 ,SDR13.6 and SDR17."],
    features: [
      "The Butt Fusion is the most important and widely used method of connection for HDPE pipes larger than 110 mm. It is a method of jointing pipe ends by way of heating and cooling under pressure, resulting in pipe joints as strong as the pipe itself. The HDPE butt fusion requests the HDPE pipes & fittings have the same outer diameter, and the tolerance of wall thickness of both shall be no exceed 10%, in order to assure the best welding results."
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn75mm-dn1200mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-45elbow': {
    description: [
    "Free sample",
"Custom made as your request",
"Quality guarantee",
"OEM is ok"],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn63mm-dn800mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-90elbow': {
    description: [
    "We have full range size of HDPE 90°elbows made of 100% new raw material, and all sizes are injection moulded type, it have strong strength and more stable."],
    features: [
      "Application field: HDPE 90 degree elbows is used to join two lengths of HDPE pipe on an angle of 90 degrees."
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn63mm-dn800mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-flange': {
    description: [
    "HDPE Flange Adapter, also called HDPE stub flange or HDPE stub end, is a cost effective, easy to assemble, mechanical joint intended to connect HDPE pipe to any flange piping components (such as valves, pumps..etc) without the need for costly fusion equipment.",
    "When joining to metal or to certain other piping materials, or if a HDPE pipe section capable of disassembly is required, HDPE flange adaptor or HDPE stub flange are available. These items are designed so that one end matches the HDPE pipe for a butt fusion connection, the opposite end contains a stub that provides structural support. By utilizing the addition of a steel backup ring, it permits bolting to a similar flanged end connection to another pipe, of various possible materials.",
    "HDPE flange adaptor shall be assembled together with steel backup rings (G.I. backing rings). Steel bolts/nuts & rubber gaskets will be also requested."],
    features: [
      "Municipal water supply, gas supply and agriculture etc.",
      "Commercial & Residential water supply",
      "Industrial liquids transportation",
      "Sewage treatment",
      "Food and chemical industry",
      "Replacement of cement pipes and steel pipes",
      "Argillaceous silt, mud transportation",
      "Garden green pipe networks"
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn50mm-dn1200mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-reducing-tee': {
    description: [
    "HDPE butt fusion reducing tee, also know as HDPE tee reducer, is another type of pipe tee used in HDPE pipeline. Reducing tee, like all pipe tees, is in the shape of T with two ends of equal size and the third one slightly smaller. In other words, reducing tee is a type of pipe fitting in which the branch port size is smaller than the ports of the run. This type of pipe fitting can also consider size reduction from one of the run ports to the other."],
    features: [
      "The Butt Fusion is the most important and widely used method of connection for HDPE pipes larger than 110 mm. It is a method of jointing pipe ends by way of heating and cooling under pressure, resulting in pipe joints as strong as the pipe itself. The HDPE butt fusion requests the HDPE pipes & fittings have the same outer diameter, and the tolerance of wall thickness of both shall be no exceed 10%, in order to assure the best welding results."
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn75*50mm-dn800*630mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-reducing-coupler': {
    description: [
    "HDPE reducer is commonly used for the connection of two different diameter pipelines, by reduce the pipe size from a larger diameter to a smaller diameter. Alternatively, reducer may refer to any fitting which causes a change in pipe diameter. This change may be intended to meet hydraulic flow requirements of the system or adapt to existing piping of a different size."],
    features: [
      "Municipal water supply, gas supply and agriculture etc.",
      "Commercial & Residential water supply",
      "Industrial liquids transportation",
      "Sewage treatment",
      "Food and chemical industry",
      "Replacement of cement pipes and steel pipes",
      "Argillaceous silt, mud transportation",
      "Garden green pipe networks"
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn75*50mm-dn630*560mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'butt-fusion-reducing-cross': {
    description: [
    "Can all HDPE pipe fittings be provided in stock? To satisfy our customers’ prompt delivery request, SUNPLAST stacks large inventory of HDPE pipe fittings.",
    "What technology do HDPE pipe fittings be made? Is it same to HDPE pipe manufacturing?",
    "The HDPE pipe fittings are made by injection moulded technology. The one-time injection moulded with out any jointing makes the HDPE pipe fittings the most reliable solution for HDPE piping systems.",
    "HDPE pipe is made by extrusion moulding, which is different to HDPE pipe fittings."],
    features: [
      "Municipal water supply, gas supply and agriculture etc.",
      "Commercial & Residential water supply",
      "Industrial liquids transportation",
      "Sewage treatment",
      "Food and chemical industry",
      "Replacement of cement pipes and steel pipes",
      "Argillaceous silt, mud transportation",
      "Garden green pipe networks"
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn90*63mm-dn800*630mm(outer diameter)',
      pressure: 'SDR17 PN10, SDR13.6 PN12.5, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-equal-coupler': {
    description: [
    "HDPE electro fusion coupler, we also called HDPE electro fusion equal coupling which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "In the butt fusion welding method, heaters are used to heat the surface of both head of pipe and the HDPE joints, but in the electrofusion welding method, the heat is generated internally and through the electric current, to make sure pipe and fitting completely connected, no leakage. Electrofusion coupling is a common fitting for connecting two polyethylene tubes to each other."],
     features: [
      "Municipal water supply, gas supply and agriculture etc.",
      "Commercial & Residential water supply",
      "Industrial liquids transportation",
      "Sewage treatment",
      "Food and chemical industry",
      "Replacement of cement pipes and steel pipes",
      "Argillaceous silt, mud transportation",
      "Garden green pipe networks"
    ],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn25mm-dn800mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-end-cap': {
    description: [
    "HDPE electro fusion end cap, we also called HDPE end cap and pipe end, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn50mm-dn250mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-45elbow': {
    description: [
    "HDPE electro fusion 45 degree elbow, we also called HDPE electro fusion 45 degree bend, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "In the butt fusion welding method, heaters are used to heat the surface of both head of pipe and the HDPE joints, but in the electrofusion welding method, the heat is generated internally and through the electric current, to make sure pipe and fitting completely connected, no leakage. Electrofusion coupling is a common fitting for connecting two polyethylene tubes to each other.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn50mm-dn630mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-90elbow': {
    description: [
    "HDPE electro fusion 90 degree elbow, we also called HDPE electro fusion 90 degree bend, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn25mm-dn630mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-equal-tee': {
    description: [
    "HDPE electro fusion equal tee, we also called HDPE electro fusion tee, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn32mm-dn630mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-reducing-tee': {
    description: [
    "HDPE electro fusion reducing tee, we also called HDPE electro fusion tee reducer, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn32*25mm-dn630*500mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-reducer': {
    description: [
    "HDPE electro fusion reducing, we also called HDPE electro fusion tee, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn32*25mm-dn500*400mm(inner diameter) ',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
  'ef-stub-end': {
    description: [
    "HDPE electro fusion stub end, we also called HDPE stub end, like all electro fusion fittings which different from butt fusion fitting. The main difference is electro fusion fitting have copper wire coil inside and use electro fusion facility, it’s very easy to operate.",
    "We can provide full range of electro fusion fitting from dn25mm to 630mm, including coupling, elbow, tee flange and so on."],
    specifications: {
      material: '100% virgin raw material',
      size: 'dn50mm-dn800mm(inner diameter)',
      pressure: 'SDR17 PN10, SDR11 PN16',
      service_life: '50 years for normal use',
      delivery_time: 'Stock available for regular sizes',
      production_lead_time : '7-10 days for a 20ft container, 10-15 days for a 40ft container.'
    }
  },
};

const ProductDetail = () => {
  const location = useLocation();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  // Parse the pathname to get product information
  const pathParts = location.pathname.replace('/product/', '').split('/');
  const [categorySlug, subcategorySlug, productSlug] = pathParts;

  // Product data mapping
  const getProductImage = (categorySlug: string, subcategorySlug: string, productSlug: string) => {
    // First check for specific product images
    const productImageMap: { [key: string]: string } = {
      // Horizontal Slurry Pumps
      'sh-metal-lined-slurry-pump': shMetalLinedPumpImage,
      'shr-rubber-lined-slurry-pump': shrRubberLinedPumpImage,
      'slsm-slurry-pump': slSmSlurryPumpImage,
      'shh-slurry-pump': shhSlurryPumpImage,
      'shpshpp-high-pressure-pumps': shpShppPumpImage,
      // Vertical Sump Pumps
      'sv-svr-vertical-slurry-pump': svSvrVerticalPumpImage,
      'zjl-vertical-sump-pump': zjlVerticalPumpImage,
      
      // Gravel Dredging Pumps
      'gravel-pump': gravelPumpImage,
      'wn-pump': wnPumpImage,
      'zj-slurry-pump': zjslurryPumpImage,
      'zgb-slurry-pump': zgbslurryPumpImage,
      'sf-pump': sfPump,
      'shf-pump': shfPump,
      'metal-parts':metalParts,
      'rubber-parts':rubberParts,
      'pu-parts': puParts,
      'ef-equal-coupler': efEqualCouplerImage,
      'ef-end-cap': efEndCapImage,
      'ef-45elbow': ef45ElbowImage,
      'ef-90elbow': ef90ElbowImage,
      'ef-equal-tee': efEqualTeeImage,
      'ef-reducing-tee': efreducingTeeImage,
      'ef-reducer': efReducerImage,
      'ef-stub-end': efStubEndImage,
      // 'ef-female-thread': efFemaleThreadImage,
      // 'ef-male-thread': efMaleThreadImage,
      // 'ef-cross-tee': efCrossTeeImage,

      'butt-fusion-end-cap': bfEndCapImage,
      // 'bf-22-5-elbow': bf225ElbowImage,
      'butt-fusion-45elbow': bf45ElbowImage,
      'butt-fusion-90elbow': bf90ElbowImage,
      'butt-fusion-flange': bfFlangeImage,
      'butt-fusion-equal-tee': bfEqualTeeImage,
      'butt-fusion-reducing-tee': bfReducingTeeImage,
      'butt-fusion-reducing-coupler': bfReducingCouplingImage,
      'butt-fusion-reducing-cross': bfReducingCrossImage,
    };

    // If there's a specific product image, return it
    if (productSlug && productImageMap[productSlug]) {
      return productImageMap[productSlug];
    }

    // Otherwise, fall back to subcategory/category images
    const categoryImageMap: { [key: string]: string } = {
      'slurry-pumps-horizontal-slurry-pumps': horizontalSlurryPumpImage,
      'slurry-pumps-vertical-sump-pumps': verticalSlurryPumpImage,
      'slurry-pumps-sv-svr-vertical-slurry-pump': svSvrVerticalPumpImage,
      'slurry-pumps-zjl-vertical-sump-pump': zjlVerticalPumpImage,
      'slurry-pumps-zj': zjlVerticalPumpImage,
      'slurry-pumps-gravel-pump': gravelPumpImage,
      'slurry-pumps-wn-pump': wnPumpImage,
      'slurry-pumps-centrifugal-slurry-pumps': shMetalLinedPumpImage,
      'slurry-pumps-gravel-dredging-pumps': gravelDredgingPumpImage,
      'slurry-pumps-zjzgb-slurry-pumps': zjZgbSlurryPumpImage,
      'slurry-pumps-shpshpp-high-pressure-pumps': shpShppPumpImage,
      'slurry-pumps-froth-pump': frothPumpImage,
      'slurry-pumps-pump-parts': pumpPartsImage,
      'hdpe-pipe-fittings-electrofusion-fitting': electrofusionFittingsImage,
      'hdpe-pipe-fittings-short-type-butt-fusion-fitting': buttFusionFittingsImage,
      'hdpe-pipe-fittings-long-type-butt-fusion-fitting': buttFusionFittingsImage,
      'hdpe-valves-stop-valve': hdpeBallValveImage,
      'hdpe-valves-ball-valve': hdpeBallValveImage,
      'industrial-tools-customised-tool-kits': customizedToolkitsImage,
      'industrial-tools-insulated-tools': insulatedToolsImage,
      'industrial-tools-non-sparking-tools': nonSparkingToolsImage
    };
    
    return categoryImageMap[`${categorySlug}-${subcategorySlug}`] || slurryPumpsImage;
  };

const slugToText = (slug: string) => {
  // Check if the slug exists in our mapping
  if (productNameMap[slug]) {
    return productNameMap[slug];
  }
  
  // Fall back to default capitalization for unmapped items
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

  const categoryName = slugToText(categorySlug);
  const subcategoryName = slugToText(subcategorySlug);
  const productName = slugToText(productSlug);
  const productImage = getProductImage(categorySlug, subcategorySlug, productSlug);

  // Generate product specifications based on category
  const getProductSpecs = (categorySlug: string, productName: string) => {
    const specs: { [key: string]: any } = {
      'slurry-pumps': {
        'Capacity': 'Up to 5,000 m³/h',
        'Head to': 'Up to 73 meters',
        'Discharge Size': '1" to 18"',
        'Pressure to': 'Up to 2100 kPa'
      },
      'hdpe-pipe-fittings': {
        'Material': 'PE100 / PE80',
        'Pressure Rating': 'SDR 11, SDR 17, SDR 21',
        'Size Range': '20mm - 1200mm',
        'Standard': 'ISO 4427, EN 12201',
        'Temperature Range': '-40°C to +60°C',
        'Connection Type': productName.includes('Electrofusion') ? 'Electrofusion' : 'Butt Fusion',
        'Color': 'Black with Blue Stripes'
      },
      'hdpe-valves': {
        'Material': 'PE100',
        'Pressure Rating': 'PN 16',
        'Size Range': '63mm - 315mm',
        'Standard': 'ISO 4427',
        'Operation': 'Manual / Actuated',
        'Seal Material': 'EPDM',
        'Body Type': 'Full Bore'
      },
      'industrial-tools': {
        'Material': productName.includes('Non Sparking') ? 'Copper Beryllium' : 'Chrome Vanadium Steel',
        'Certification': 'ISO 9001, CE Marked',
        'Insulation': productName.includes('Insulated') ? '1000V AC / 1500V DC' : 'N/A',
        'Safety Standard': 'IEC 60900 (if insulated)',
        'Finish': 'Polished Chrome',
        'Warranty': '2 Years',
        'Kit Size': '10-50 pieces'
      }
    };

    return specs[categorySlug] || {};
  };

  const specifications = getProductSpecs(categorySlug, productName);

  const features = [
    'High Quality Materials',
    'International Standards Compliance',
    'Rigorous Quality Testing',
    'Global Shipping Available',
    'Technical Support Included',
    'Competitive Pricing'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0 overflow-x-auto">
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 flex-shrink-0">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span className="hidden xs:inline">Back to Home</span>
                  <span className="xs:hidden">Home</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <Link to="/products" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  <Package className="h-4 w-4 mr-1" />
                  <span className="hidden xs:inline">View All Products</span>
                  <span className="xs:hidden">Products</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border hidden md:block" />
              <div className="flex items-center space-x-2 min-w-0 hidden md:flex">
                <Package className="h-5 w-5 text-primary flex-shrink-0" />
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent truncate">
                  Product Details
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c26d0e98-2c0c-423f-b91d-c123b91cf337.png" 
                  alt="DHEYANSHI INTERNATIONAL Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-sm md:text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:block">
                DHEYANSHI INTERNATIONAL
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary whitespace-nowrap">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary whitespace-nowrap">Products</Link>
            <span>/</span>
            <span className="text-primary whitespace-nowrap">{categoryName}</span>
            <span>/</span>
            <span className="text-primary whitespace-nowrap">{subcategoryName}</span>
            <span>/</span>
            <span className="text-foreground font-medium whitespace-nowrap">{productName}</span>
          </div>
        </div>
      </div>
      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted/20 transition-all duration-300 group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={productImage} 
                  alt={productName}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4 space-y-2">
                <Badge variant="secondary" className="bg-primary/90 text-white border-none shadow-lg">
                  In Stock
                </Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {categoryName}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {productName}
                </h1>
                {subcategoryName !== 'Froth Pump' && (
                  <p className="text-lg">
                  {subcategoryName}
                  </p>
                )}
              </div>

              {/* <div className="prose text-muted-foreground"> */}
                <div className="mt-12 md:mt-16">
            <Card className="bg-gradient-to-br from-background via-muted/50 to-background border-primary/10">
  <CardHeader className="space-y-1">
    <div className="flex items-center space-x-2">
      <Package className="h-5 w-5 text-primary" />
      <CardTitle>Technical Specifications</CardTitle>
    </div>
    <CardDescription>
      Detailed specifications for {productName}
    </CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {productDetailsMap[productSlug]?.specifications ? (
      Object.entries(productDetailsMap[productSlug].specifications).map(([key, value]) => (
        <div key={key} className="p-3 rounded-lg bg-muted/30 border border-border/50 space-y-1 hover:bg-muted/40 transition-colors">
          <div className="text-sm font-medium text-primary">
            {key.split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </div>
          <div className="text-base font-medium">{value}</div>
        </div>
      ))
    ) : (
        // Fall back to category-based specifications if no product-specific specs
        Object.entries(getProductSpecs(categorySlug, productName)).map(([key, value]) => (
          <div key={key} className="p-3 rounded-lg bg-muted/30 border border-border/50 space-y-1 hover:bg-muted/40 transition-colors">
            <div className="text-sm font-medium text-primary">{key}</div>
            <div className="text-base font-medium">{value}</div>
          </div>
        ))
      )}
    </div>
  </CardContent>
</Card>
          </div>
                {/* <p className="text-sm md:text-base">
                  {productDetailsMap[productSlug] ? (
                    productDetailsMap[productSlug].description
                  ) : (
                    `High-quality industrial equipment manufactured to international standards. 
                    This product is part of our ${categoryName.toLowerCase()} range, specifically 
                    designed for demanding industrial applications with superior performance and reliability.`
                  )}
                </p>
              </div> */}

              

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Sales
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">Quality Assured</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">ISO Certified</div>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">Global Shipping</div>
                </div>
              </div>
            </div>
          </div>
          <div className="prose text-muted-foreground">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">Product Description</h3>
                  <div className="space-y-2">
                    {Array.isArray(productDetailsMap[productSlug]?.description) ? (
                      productDetailsMap[productSlug].description.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                          <p className="text-sm md:text-base text-muted-foreground">{point}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm md:text-base">
                        High-quality industrial equipment manufactured to international standards. 
                        This product is part of our {categoryName.toLowerCase()} range, specifically 
                        designed for demanding industrial applications with superior performance and reliability.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            {/* Key Features */}
              <div className="mt-8 space-y-6">
  <div className="flex items-center space-x-2">
    <Package className="h-5 w-5 text-primary" />
    <h3 className="text-xl font-semibold">Key Features</h3>
  </div>
  
  <div className="grid sm:grid-cols-2 gap-4">
    {(productDetailsMap[productSlug]?.features || features).map((feature, index) => (
      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/40 transition-colors">
        <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
        <span className="text-sm text-muted-foreground">{feature}</span>
      </div>
    ))}
  </div>
</div>

          {/* Specifications */}
          

          {/* Contact Section */}
          <div className="mt-12 md:mt-16">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Need More Information?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Our technical experts are ready to help you find the perfect solution for your needs.
                </p>
                <div className="flex justify-center">
                  <Button size="lg" onClick={() => setIsContactFormOpen(true)} className="w-full sm:w-auto">
                    <Mail className="h-4 w-4 mr-2" />
                    Connect Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        productName={productName}
      />
    </div>
  );
}
export default ProductDetail;