import { FC } from 'react';
import { Button } from "@/components/ui/button"
import linkedinIcon from '/public/linkedin.svg';
import githubIcon from '/public/github.svg';
import emailIcon from '/public/gmail.svg';
import wechatIcon from '/public/wechat.svg';
import { useToast } from "@/components/hooks/use-toast"

  

export const Contact: FC = () => {
    const { toast } = useToast();
    return (
        <section className="py-16 px-4">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="flex flex-row flex-wrap gap-8 items-center justify-start">
                <div className="flex flex-row gap-2 items-center">
                    <img src={linkedinIcon} alt="LinkedIn" width={24} height={24}/>
                    <Button variant="link" onClick={() => window.open('https://www.linkedin.com/in/zian-wang-39081b225/', '_blank')}>LinkedIn</Button>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={githubIcon} alt="GitHub" width={24} height={24} />
                    <Button variant="link">GitHub</Button>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={emailIcon} alt="Email" width={40} height={40} />
                    <Button variant="link" onClick={() => {
                        navigator.clipboard.writeText('lewis.wang970516@gmail.com');
                        toast({
                            description: 'You can now paste it into your email client',
                        });
                    }}>Copy Email</Button>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={wechatIcon} alt="WeChat" width={24} height={24} />
                    <Button variant="link">WeChat</Button>
                </div>
            </div>

        </section>
    )
}