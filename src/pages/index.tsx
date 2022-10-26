import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import keyImage from '../img/key.jpg';

export default function Index () {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    console.log({isSmall});

    return (
        <Box>
            <Box sx={{
                py: 16,
                px: isSmall? 2: 8,
                typography: {
                    h2: {
                        fontWeight: 400,
                    },
                },
            }}>
                <Typography variant="h2">
                    MedicalArt
                </Typography>                
            </Box>
            <Box sx={{
                backgroundImage: `url(${keyImage})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                height: 540,
                mb: 8,
            }}>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Typography paragraph>
                    あなたのメディカルデータから いまのあなたの健康状態をアート化。自分の内面を鑑賞できる絵画に。
                </Typography>
                <Typography paragraph>
                    表情や行動、健康情報など、自身から生成されるデータをかけあわせ、現代のメディカルデータと再定義し、そのデータを基に、人の内面をアート化しました。MedicalArtを通して自分の知らなかった内面を知る体験を。
                </Typography>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Button variant="contained" href="https://www.medicalart.gallery">
                    アプリを開く
                </Button>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Typography variant="h5">
                    お問い合わせ
                </Typography>
                <Button variant="outlined" sx={{
                    my: 4,
                    color: '#000',
                }} href="mailto:contact@medicalart.gallery">
                    contact@medicalart.gallery
                </Button>
            </Box>
        </Box>
    )
};

