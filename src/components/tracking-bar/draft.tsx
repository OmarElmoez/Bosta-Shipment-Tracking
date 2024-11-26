// import { cn } from "@/lib/utils"
//
// type ShipmentStatus = "delivered" | "cancelled" | "not-delivered"
//
// interface ShippingStatusProps {
//   status: ShipmentStatus
//   className?: string
// }
//
// export default function ShippingStatus({ status, className }: ShippingStatusProps) {
//   const steps = [
//     "تم التسليم",
//     "تم استلام الشحنة من المتجر",
//     "تم استلام الشحنة من التاجر",
//     "تم إنشاء الشحنة",
//   ]
//
//   const getStatusColor = (status: ShipmentStatus) => {
//     switch (status) {
//       case "delivered":
//         return "bg-green-500"
//       case "cancelled":
//         return "bg-red-500"
//       case "not-delivered":
//         return "bg-yellow-500"
//       default:
//         return "bg-gray-200"
//     }
//   }
//
//   const getStepStatus = (stepIndex: number) => {
//     if (status === "cancelled") {
//       return "complete"
//     }
//
//     if (status === "delivered") {
//       return "complete"
//     }
//
//     // For not-delivered, only show progress up to the second step
//     if (status === "not-delivered") {
//       return stepIndex >= 2 ? "incomplete" : "complete"
//     }
//
//     return "incomplete"
//   }
//
//   return (
//     <div className={cn("w-full max-w-3xl mx-auto px-4", className)}>
//       <div className="relative">
//         {/* Progress Bar */}
//         <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
//         <div
//           className={cn(
//             "absolute top-5 left-0 h-0.5 transition-all duration-500",
//             getStatusColor(status)
//           )}
//           style={{
//             width: status === "delivered" ? "100%" : status === "cancelled" ? "100%" : "50%",
//           }}
//         />
//
//         {/* Steps */}
//         <div className="relative flex justify-between">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className={cn(
//                   "w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10",
//                   getStepStatus(index) === "complete"
//                     ? cn("border-none", getStatusColor(status))
//                     : "border-gray-200 bg-white"
//                 )}
//               >
//                 <div
//                   className={cn(
//                     "w-3 h-3 rounded-full",
//                     getStepStatus(index) === "complete" ? "bg-white" : "bg-gray-200"
//                   )}
//                 />
//               </div>
//               <span className="mt-2 text-sm text-center" style={{ fontFamily: "Arial, sans-serif" }}>
//                 {step}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
//
