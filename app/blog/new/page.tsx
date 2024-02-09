import ContentContainer from "@/components/core/containers/content-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import checkCookie from "@/lib/checkCookie";
// const DanCheck = ({ setSaysIsDan }) => {

//   const handleClickYes = useCallback(() => {
//     setSaysIsDan(true);
//   }, [setSaysIsDan])

//   const handleClickNo = useCallback(() => {

//   }, []);

//   return (
//     <FlexContainer className="">
//       <H2>Are you Dan?</H2>
//       <FlexContainer className="md:flex-row mt-10">
//         <Button
//           className="mr-0 md:mr-10 mb-5 md:mb-0"
//           onClick={handleClickYes}  
//         >
//           Yes
//         </Button>
//         <Button>
//           No
//         </Button>
//       </FlexContainer>
//     </FlexContainer>
//   )
// };

// const PasswordCheck = ({ }) => {
//   // const handleIsDan = useCallback(() => {
//   //   setVerifiedDan(true);
//   // }, [setVerifiedDan]);

//   // const handleIsNotDa = useCallback(() => {
//   //   setVerifiedDan(false);
//   // }, [setVerifiedDan]);

//   return (
//     <FlexContainer>
//       <H2>Prove it!</H2>
//       <FlexContainer className="md:flex-row mt-10">
//         <Button
//           className="mr-0 md:mr-10 mb-5 md:mb-0"
//           onClick={() => {}}  
//         >
//           I think that&apos;s it
//         </Button>
//         <Button >
//           ...nevermind
//         </Button>
//       </FlexContainer>
//     </FlexContainer>
//   )
// }

// const VerifyDan = () => {
//   return (
//     <div>hi</div>
//   )
// };

const NewBlog = () => {
  const verifiedDan = checkCookie(
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_NAME,
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_VALUE
  );
  return (
    <LandscapeContainer>
      <ContentContainer>
        {
          verifiedDan ? (
            <div>hi dan..this will be a form eventually</div>
          ) : (
            <div>not dan</div>
          )
        }
      </ContentContainer>
    </LandscapeContainer>
  )
};

export default NewBlog;
