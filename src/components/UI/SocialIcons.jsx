function SocialIcons({link, icon}) {
  return (
    <a href={link} target="_blank">
      <img src={icon} className="h-6 w-[30px] hover:scale-110 hover:duration-200" />
    </a>
  );
}

export default SocialIcons;
