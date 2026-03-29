import Image from "next/image";

export const InstaDRLogo = () => {
  return (
    <Image
      src="/images/instaDR-logo.svg"
      alt="InstaDR Logo"
      height={20}
      width={200}
      style={{
        height: "20px",
        width: "auto",
        marginRight: "24px",
      }}
    />
  )
}